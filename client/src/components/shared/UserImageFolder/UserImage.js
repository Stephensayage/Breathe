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

  let [state, changeState] = useState(false)

  useEffect(() => {
    const getData = async () => {
      let id = props.match.params.id
      const userShow = await getUser(id)
      showUser(userShow)
      changeState(true)
    }
    getData()
  }, [])


  return (
    <div>
      {state ? <img src={user.imgUrl} /> : <Link to="/usercreate" ><button>Sign In/Sign Up</button></Link>}
    </div>
  )
}

export default withRouter(UserImage)
