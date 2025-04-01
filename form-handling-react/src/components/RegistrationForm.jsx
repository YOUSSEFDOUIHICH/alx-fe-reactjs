import React, { useState } from 'react'

function RegistrationForm() {
    const [errors, setErrors] = useState({});
    const [User , setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({
            ...User,
            [e.target.name]: e.target.value,
        });
    };
    const validateForm = () => {
        let newErrors = {};
        if (!email) newErrors.email = "L'email est requis.";
        if (!password) newErrors.password = "Le mot de passe est requis.";
        if (!username) newErrors.username = "Le nom d'utilisateur est requis.";
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form Data Submitted:", User);
            setErrors({});
        }
        
        
    };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username'name="username" value={username} onChange={handleChange} />
        <input type="text" placeholder='email'name="email" value={email} onChange={handleChange} />
        <input type="text" placeholder='password'name="password" value={password}onChange={handleChange} />
        <button type="submit">S'inscrire</button>
    </form>
  )
}

export default RegistrationForm