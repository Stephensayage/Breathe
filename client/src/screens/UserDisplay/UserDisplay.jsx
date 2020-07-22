import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { getUser, deleteUser } from '../../services/users'
import { Link, Redirect } from 'react-router-dom'
import api from '../../services/apiConfig'
import './UserDisplay.css'
import { FiEdit2, FiTrash, FiHeart } from 'react-icons/fi'
import { BsGear } from 'react-icons/bs'
import { RiCalendarEventLine, RiNotification3Line } from 'react-icons/ri'
import { Dialog } from "react-bootstrap-easy-dialog";
import { FaRegLaugh, FaRegMeh, FaRegFrown } from 'react-icons/fa'


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

  // const handleClick = async () => {
  //   let id = props.match.params.id
  //   const deleteThatUser = await deleteUser(id)
  //   return deleteThatUser
  // }

  return (
    <Layout>
      <div className='d-flex mx-auto m-3 outer-contain'>
        <div className='d-flex flex-column custom-div'>
          <div>
        {/* <div className='d-flex'>
              <h6 className='border mt-4 px-4 ml-3'>Name:</h6>
              
              <div className='d-flex user-info mt-3 mr-5 ml-2'>
                <p className='m-2'>{user.name}</p>
                <Link to={`/user/${user._id}/edit`}><FiEdit2 className='text-dark'/></Link>
              </div>
        </div> */}

        {/* <div className='d-flex'>
              <h6 className='border px-4 ml-3'>Email:</h6>
              
              <div className='d-flex user-info mr-5 ml-2 '>
                <p className=' m-2 px-4'>{user.email}</p>
                <Link to={`/user/${user._id}/edit`}><FiEdit2 className='text-dark'/></Link>
              </div>  
        </div> */}
        {/* <div className='d-flex'>
              <h6 className='border px-4 ml-3'>Location:</h6>
              <div className='d-flex user-info mr-5 ml-2 '>
              <p className=' m-2 '>{user.location}</p>
                <Link to={`/user/${user._id}/edit`}><FiEdit2 className='text-dark'/></Link>
            </div>
        </div> */}
            
            <div className='d-flex flex-column'>
              <p>Mood Today?</p>

              <div className='align-self-center'>
                <FaRegLaugh className='text-success mood-icon' /> <FaRegMeh className='text-warning mood-icon' /> <FaRegFrown className='text-danger mood-icon'/>
              </div>
              
              <p>Mood History</p>

            </div>

          
          </div>
          
          
            <div className='list-div  mx-auto px-4 py-3'> <FiEdit2 className='user-icon'/> Edit Profile</div>
            <Link to={`/user/${user._id}/edit`}></Link>
          

          <div className='list-div  mx-auto px-4 py-3'> <BsGear className='user-icon'/> Preferences</div>

          <div className='list-div  mx-auto px-4 py-3'> <RiCalendarEventLine className='user-icon'/> Calendar</div>

          <div className='list-div  mx-auto px-4 py-3'> <FiHeart className='user-icon'/> Favorite Services</div>

          <div className='list-div  mx-auto px-4 py-3'> <RiNotification3Line className='user-icon'/> Notification Settings</div>

          
          <Dialog>
            {dialog => {
              async function handleClick() {
                const confirmed = await dialog.confirm("Are you sure you want to delete your acount?");
                console.log(confirmed);
                let id = props.match.params.id
                const deleteThatUser = await confirmed ? deleteUser(id) : null
                return deleteThatUser
              }
              return <> <div className='list-div mx-auto px-4 py-3 mb-3' onClick={handleClick}> <FiTrash className='user-icon' /> Delete My Account</div></>
            }}
          </Dialog>
        </div>

        <div className='d-flex flex-column justify-content-center align-items-center mx-3'>
          <img className='rounded-circle custom-img mt-5' src={user.imgUrl} alt={user.name} />
          <p className=''>{user.name}</p>
          <p className='member-info'><small>{user.location} | Member since {user.createdAt}</small></p>
          <p>Choose the features that are important to you</p> 
          <p className='member-info'>We will find recommendations tailored specifically to you</p>
          <Link className='text-dark' to={`/matchchoices/${user._id}`}><button className='match-btn mb-3'>MATCH ME!</button></Link>
          {/* <Link to={`/user/${user._id}/edit`}><p className='m-4 mx-auto'>Change Profile Photo</p></Link> */}
        </div>
      </div>
    </Layout>
  )
}
