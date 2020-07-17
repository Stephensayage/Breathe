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
  let id = results.map(item => item._id)

  const handleChange = (e) => {
    const { id, value } = e.target
    updateUser(user => ({
      ...user,
      [id]: value
    }))
  }
  const handleClick = (e) => {
    e.preventDefault()
    updateRedirect('true')
  }

  if (redirect === 'true') {
    return <Redirect to={`/userdisplay/${id}`} />
  }


  return (

    <div>
      <form className="user-sign">
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          Email<input type="email"
            className="form-input"
            id="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange} />
          Password<input type="password"
            className="form-input"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange} />
        </div>
      </form>
      <button type="submit" onClick={handleClick} >Sign In</button>
    </div>
  )
}

export default withRouter(Signin)