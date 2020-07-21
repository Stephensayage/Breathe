import React, { useState, useEffect } from 'react'
import { getUser, deleteUser } from '../../../services/users'
import { Link, useParams, withRouter } from 'react-router-dom'


function UserImage(props) {

  let params = useParams()

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
      console.log(user)
    }
    getData()
  }, [])

  console.log(user)

  return (
    <div>
      {user.name !== '' ? <img src={user.imgUrl} /> : <button className="">Sign In/Sign Up</button>}
    </div>
  )
}

export default withRouter(UserImage)
