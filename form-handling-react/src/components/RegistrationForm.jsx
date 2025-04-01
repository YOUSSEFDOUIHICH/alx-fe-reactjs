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
        
        let newErrors = {};
        if (!username) newErrors.email = "L'email est requis.";
        if (!email) newErrors.password = "Le mot de passe est requis.";
        if (!password) newErrors.username = "Le nom d'utilisateur est requis.";
        return newErrors;
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