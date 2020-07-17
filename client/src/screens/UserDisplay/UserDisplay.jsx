import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { getUser, deleteUser } from '../../services/users'
import { Link } from 'react-router-dom'
import api from '../../services/apiConfig'

export default function UserDisplay(props) {

  let [user, showUser] = useState({
    user: {
      name: '',
      email: '',
      password: ''
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
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user._id}</h2>
        <button onClick={handleClick}>Delete My Account</button>
      </div>
    </Layout>
  )
}
