import React, { useEffect, useState }from 'react'
import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer';
import { getUsers } from '../../../services/users'
import { withRouter,useParams } from 'react-router-dom'


function Layout(props) {

  const params = useParams()

  let [users, updateFindUser] = useState([])
  let [userId, updateUserId] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const showUsers = await getUsers()
      updateFindUser(showUsers)
    }
    callApi()
  }, [])

  const findUser = users.filter(user => params.id === user._id).map(user=>user._id)
  




  return (
    
    
    <div className='page-container'>
    
      <div className='content-wrap'>
        <Nav userId={findUser}/>
        <div className="layout-children">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )


}
export default withRouter(Layout)