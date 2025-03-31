import React, { useState } from 'react'

function RegistrationForm() {
    const [username , setusername] = useState({
        username: ""
        
    });
    const [email , setemail] = useState({
        email:""

    });
    const [password , setpassword] = useState({
        password:""
    });

    const handleChange = (e) => {
        setusername({
            ...username,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Vérification si tous les champs sont remplis
        if (!username || !email || !password) {
            alert("Tous les champs sont obligatoires !");
            return;
        }

        console.log("Données soumises :", User);
        alert("Inscription réussie !");
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