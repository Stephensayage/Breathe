import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import UserDisplay from "../UserDisplay/UserDisplay";

export default function UserCreate() {

  let [user, createUser] = useState({
    user: {
      name: '',
      email: '',
      password: '',
    }
  })

  let [created, changeCreated] = useState(false)

  if (created) {
    return <Redirect to={`/userdisplay`} />
  }
  return (

    <div>
      <form onSubmit={() => changeCreated(true)}>
        Name <input type="text" value={user.name} onChange={(e)=> createUser({name:e.target.value})} />
        Email <input type="text" value={user.email} onChange={(e)=> createUser({email:e.target.value})}/>
        Password <input type="password" value={user.password} onChange={(e) => createUser({ password: e.target.value })} />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

