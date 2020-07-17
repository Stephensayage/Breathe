import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { createUser } from '../../services/users'


import UserDisplay from "../UserDisplay/UserDisplay";

export default function UserCreate() {

  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('')
  



  const handleSubmit = async () => {
    const useInfo = {
      'name': userName,
      'email': userEmail,
      'password': userPassword,
    }
    const created = await createUser(useInfo)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name <input type="text" value={userName} name='name' onChange={(e) => setUserName(e.target.value)} />
        Email <input type="text" value={userEmail} name='email' onChange={(e)=> setUserEmail(e.target.value)}/>
        Password <input type="text" value={userPassword} name='password' onChange={(e) => setUserPassword(e.target.value)} />
        <input type="submit" value="Submit"/>
      </form>
      </div>
    
  )
}

