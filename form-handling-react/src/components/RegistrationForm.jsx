import React, { useState } from 'react'

function RegistrationForm() {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Vérification si tous les champs sont remplis
        if (!User.username || !User.email || !User.password) {
            alert("Tous les champs sont obligatoires !");
            return;
        }

        console.log("Données soumises :", User);
        alert("Inscription réussie !");
    };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username'name="username" value={User.username} onChange={handleChange} />
        <input type="text" placeholder='email'name="email" value={User.email} onChange={handleChange} />
        <input type="text" placeholder='password'name="password" value={User.password}onChange={handleChange} />
        <button type="submit">S'inscrire</button>
    </form>
  )
}

export default RegistrationForm