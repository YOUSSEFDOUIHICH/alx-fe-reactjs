import React from 'react'
import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);
  return (
    <div>
       <p>name:{userData.name}</p>
       <p>email: {userData.email}</p>
       
     </div>
  )
}

export default UserProfile