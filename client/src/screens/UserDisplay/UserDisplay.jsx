import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { getUser, deleteUser } from '../../services/users'
import { Link } from 'react-router-dom'

export default function UserDisplay(props) {

  let [user, showUser] = useState({
    user: {
      name: '',
      email: '',
      password: '',
    }
  })

  useEffect(() => {
    const getData = async () => {
      let id = props.match.params.id
      const userShow = await getUser(id)
      showUser(userShow)
    }
    getData()
  }, [])

  const handleClick = async () => {
    let id = props.match.params.id
    const deleteThatUser = await deleteUser(id)
    return deleteThatUser
  }

  return (
    <Layout>
      <div>
        <label>Name:</label><h4>{user.name}</h4>
        <label>Email:</label><h4>{user.email}</h4>
        <label>Location:</label><h4>{user.location}</h4>
        <label>Edit Password:</label><h4>{user.password}</h4>
        <button onClick={handleClick}>Delete My Account</button>
        <Link to={`/user/${user._id}/edit`}><button>Edit Account</button></Link>
        <Link to={`/matchchoices/${user._id}`}><button>My Matches</button></Link>
      </div>
    </Layout>
  )
}
