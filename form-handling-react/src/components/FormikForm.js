import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
    // Schéma de validation avec Yup
    const validationSchema = Yup.object({
        username: Yup.string().required("Nom d'utilisateur obligatoire"),
        email: Yup.string().email("Email invalide").required("Email obligatoire"),
        password: Yup.string()
            .min(6, "Le mot de passe doit contenir au moins 6 caractères")
            .required("Mot de passe obligatoire"),
    });

    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log("Données soumises :", values);
                alert("Inscription réussie !");
                resetForm();
            }}
        >
            {({ isSubmitting }) => (
                <Form >
                    
                    <div className="mb-2">
                        <label >Nom d'utilisateur :</label>
                        <Field type="text" name="username"  />
                        <ErrorMessage name="username" component="p" />
                    </div>

                    <div className="mb-2">
                        <label >Email :</label>
                        <Field type="email" name="email"  />
                        <ErrorMessage name="email" component="p"  />
                    </div>

                    <div className="mb-2">
                        <label >Mot de passe :</label>
                        <Field type="password" name="password"  />
                        <ErrorMessage name="password" component="p"  />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "En cours..." : "S'inscrire"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;