import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { getUser, deleteUser } from '../../services/users'
import { Link, Redirect } from 'react-router-dom'
import api from '../../services/apiConfig'
import './UserDisplay.css'
import { FiEdit2, FiTrash, FiHeart } from 'react-icons/fi'
import { BsFillPersonLinesFill, BsGear } from 'react-icons/bs'
import { RiCalendarEventLine, RiNotification3Line } from 'react-icons/ri'
import { Dialog } from "react-bootstrap-easy-dialog";



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
        <div className='d-flex flex-column   custom-div'>
          <div>
        <div className='d-flex'>
              <h6 className='border mt-4 px-4 ml-3'>Name:</h6>
              
              <div className='d-flex  user-info mt-3 mr-5 ml-2'>
                <p className='m-2'>{user.name}</p>
                <Link to={`/user/${user._id}/edit`}><FiEdit2 /></Link>
              </div>
        </div>

        <div className='d-flex'>
              <h6 className='border px-4'>Email:</h6>
              
              <div className='d-flex  user-info px-4 '>
                <p className=' m-2 px-4'>{user.email}</p>
                <Link to={`/user/${user._id}/edit`}><FiEdit2 /></Link>
              </div>  
        </div>
        <div className='d-flex'>
              <h6 className='border px-4'>Location:</h6>
              <div className='d-flex  user-info px-4 mr-5 '>
              <p className=' m-2 '>{user.location}</p>
              <Link to={`/user/${user._id}/edit`}><FiEdit2 /></Link>
            </div>
        </div>

            <div className='d-flex justify-content-between my-3 list-div ml-5'>
              <h6 className='m-2'>Edit Password</h6>
              <Link to={`/user/${user._id}/edit`}><FiEdit2 /></Link>
          </div>
          </div>
          

          <div className='list-div  mx-auto px-4 py-2'> <BsGear /> Preferences</div>

          <div className='list-div  mx-auto px-4 py-2'> <RiCalendarEventLine/> Calendar</div>

          <div className='list-div  mx-auto px-4 py-2'> <FiHeart/> Favorite Services</div>

          <div className='list-div  mx-auto px-4 py-2'> <RiNotification3Line/> Notification Settings</div>

          
          <div className='list-div  mx-auto px-4 py-2'>   <Link className='text-dark'to={`/matchchoices/${user._id}`}> <BsFillPersonLinesFill /> Your Match Choices</Link></div>
          
          <Dialog>
            {dialog => {
              async function handleClick() {
                const confirmed = await dialog.confirm("Are you sure you want to delete your acount?");
                console.log(confirmed);
                let id = props.match.params.id
                const deleteThatUser = await deleteUser(id)
                return deleteThatUser
              }
              return <> <div className='list-div mx-auto px-4 py-2 mb-3' onClick={handleClick}> <FiTrash /> Delete My Account</div></>
            }}
          </Dialog>
        </div>

      <div className='mx-auto my-5 '>
          <img className='rounded-circle' src={user.imgUrl} alt={user.name} />
          <Link to={`/user/${user._id}/edit`}><p className='m-4 mx-auto'>Change Profile Photo</p></Link>
        </div>
      </div>
    </Layout>
  )
}
