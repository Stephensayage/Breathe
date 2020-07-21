import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect, withRouter, useParams } from 'react-router-dom';
import { createUser } from '../../services/users'
import './CreateAcc.css'


function CreateAcc() {

  let params = useParams()

  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('')

  let [created, changeCreated] = useState('no')
  let [user, changeUser] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault()
    const useInfo = {
      'name': userName,
      'email': userEmail,
      'password': userPassword,
    }
    const createdUser = await createUser(useInfo)
    const userId = createdUser._id
    changeUser(userId)
    changeCreated('yes')
  }

  if (created === 'yes') {
    return <Redirect to={`/userdisplay/${user}`} />
  }

  return (
    <>
      <form className="form-ctn" onSubmit={handleSubmit} >
        <div className="inner-ctn card border-0 col-12 col-lg-6 login-card mt-2 hv-center">
          <h4 className="create-title">Create Account</h4>
        Name <input className="form-input" type="text" value={userName} name='name' onChange={(e) => setUserName(e.target.value)} />
        Email <input className="form-input" type="text" value={userEmail} name='email' onChange={(e) => setUserEmail(e.target.value)} />
        Password <input className="form-input" type="text" value={userPassword} name='password' onChange={(e) => setUserPassword(e.target.value)} />
          <input className="submit" type="submit" value="Sign Up" />
        </div>
      </form>
    </>
  )
}

export default CreateAcc