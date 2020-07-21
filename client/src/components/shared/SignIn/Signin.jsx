import React, { useState, useEffect } from 'react'
import { useParams, withRouter, Redirect } from 'react-router-dom'
import "./Signin.css"
import { getUsers } from '../../../services/users'

function Signin() {

  const [redirect, updateRedirect] = useState('false')
  const [findUser, updateFindUser] = useState([])
  const [user, updateUser] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    const callApi = async () => {
      const showUsers = await getUsers()
      updateFindUser(showUsers)
    }
    callApi()
  }, [])


  const results = findUser.filter(item => item.email === user.email)
  let email = results.map(item => item.email)
  let password = results.map(item => item.password)
  let id = results.map(item => item._id)
  let check = (id.map(item => item[0]))

  const handleChange = (e) => {
    const { id, value } = e.target
    updateUser(user => ({
      ...user,
      [id]: value
    }))
  }
  const handleClick = (e) => {
    e.preventDefault()
    if (user.email === '' || user.password === '') {
      alert('please enter an email and password!')
    } else if (check[0] === '5' && email[0] === user.email && password[0] === user.password) {
      updateRedirect('true')
    } else {
      alert('We do not have an account with that email or password')
    }
  }

  if (redirect === 'true') {
    return <Redirect to={`/userdisplay/${id}`} />
  }


  return (
    <div className="sign-in-ctn">

      <div className="inner-ctn">
        <form className="user-sign">
          <div className="input-ctn card border-0 col-12 col-lg-4 login-card mt-2 hv-center">
            <h4 className="sign-in">Sign In</h4>
          Email<input type="email"
              className="form-input"
              id="email"
              placeholder="Enter email"
              value={user.email}
              required='required'
              onChange={handleChange} />
          Password<input type="password"
              className="form-input"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required='required' />
          </div>
        </form>
        <button className="sign-btn" data-toggle="modal" data-target="#exampleModal" type="submit" onClick={handleClick} >Sign In</button>
      </div>
    </div>
  )
}

export default withRouter(Signin)