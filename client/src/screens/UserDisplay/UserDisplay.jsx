import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { getUser, deleteUser } from '../../services/users'
import { Link } from 'react-router-dom'
import './UserDisplay.css'
import { FiEdit2, FiTrash, FiHeart } from 'react-icons/fi'
import { BsGear } from 'react-icons/bs'
import { RiCalendarEventLine, RiNotification3Line } from 'react-icons/ri'
import { Dialog } from "react-bootstrap-easy-dialog";
import { FaRegLaugh, FaRegMeh, FaRegFrown } from 'react-icons/fa'


export default function UserDisplay(props) {

  let [member, updateMember] = useState('')
  let [user, showUser] = useState({
    user: {
      name: '',
      email: '',
      password: '',
    }
  })

  let [date, changeDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let id = props.match.params.id
      const userShow = await getUser(id)
      showUser(userShow)
      changeDate(new Date(userShow.createdAt).toDateString())
    }
    getData()

  }, [])




  return (
    <Layout>
      <div className='d-flex mx-auto m-3 outer-contain'>
        <div className='d-flex flex-column custom-div'>
          <div className='d-flex flex-column'>

            <p className="mood">Mood Today?</p>

            <div className='align-self-center'>
              <FaRegLaugh className='text-success mood-icon' /> <FaRegMeh className='text-warning mood-icon' /> <FaRegFrown className='text-danger mood-icon' />
            </div>


            <p className="mood">Mood History</p>
          </div>


          <Link to={`/user/${user._id}/edit`}><div className='list-div  mx-auto px-4 py-3 text-dark'> <FiEdit2 className='user-icon' /> Edit Profile</div></Link>


          <div className='list-div  mx-auto px-4 py-3'> <BsGear className='user-icon' /> Preferences</div>

          <div className='list-div  mx-auto px-4 py-3'> <RiCalendarEventLine className='user-icon' /> Calendar</div>

          <div className='list-div  mx-auto px-4 py-3'> <FiHeart className='user-icon' /> Favorite Services</div>

          <div className='list-div  mx-auto px-4 py-3'> <RiNotification3Line className='user-icon' /> Notification Settings</div>


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



          {
            user.imgUrl ?
              <img className='rounded-circle custom-img mt-5' src={user.imgUrl} alt={user.name} />
              :
              <img className='rounded-circle mt-5 mb-3 user-img' src='https://i.imgur.com/36nRvIA.jpg' alt={user.name} />
          }

          <p className=''>{user.name}</p>

          {user.createdAt && <p className='member-info'><small>{user.location} Member since {date}</small></p>}

          <p className='member-info'>Choose the features that are important to you
          We will find recommendations tailored specifically to you</p>

          <Link className='text-dark' to={`/matchchoices/${user._id}`}><button className='match-btn mb-3'>MATCH ME!</button></Link>

        </div>
      </div>
    </Layout>
  )
}
