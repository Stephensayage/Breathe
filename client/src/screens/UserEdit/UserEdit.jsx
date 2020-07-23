import React, { Component } from 'react'
import { getUser, updateUser, deleteUser } from '../../services/users'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router'
import { withRouter, Link } from 'react-router-dom'
import { Accordion, Card, Button } from 'react-bootstrap'
import { FiEdit2, FiTrash, FiHeart } from 'react-icons/fi'
import { BsGear } from 'react-icons/bs'
import { RiCalendarEventLine, RiNotification3Line } from 'react-icons/ri'
import { Dialog } from "react-bootstrap-easy-dialog";

import './UserEdit.css'


class UserEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        name: '',
        email: '',
        location: '',
        password: '',
        imgUrl: ''
      },
      updated: false,
      updatePhoto: false
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const user = await getUser(id)
    this.setState({ user })
  }


  fileSelectedHandler = (e) => {
    console.log(e.target.files[0])
    this.setState({
      imgUrl: e.target.files[0].name
    })
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let { id } = this.props.match.params
    const updated = await updateUser(id, this.state.user)
    this.setState({ updated })
  }


  render() {
    const { user, updated, updatePhoto } = this.state

    if (updated) {
      return <Redirect to={`/userdisplay/${user._id}`} />
    }
    return (
      <Layout>
        <div className='m-3 mx-auto d-flex  main-container'>
          
          <div className='my-1 mx-1 left-contain'>
            
            
            <div className='edit-contain d-flex'>
              <div className='label-contain d-flex flex-column mx-auto'>
                <label className=' mt-4 p-3'>Name</label>
                <label className=' p-3'>Location</label>
                <label className=' p-3'>Password</label>
      </div>
        <div className='form-inputs'>

                <form>
                  <input
                    className=' mt-4 mr-5 p-3 input-contain'
                    placeholder='Name'
                    value={user.name}
                    name='name'
                    required
                    autoFocus
                    onChange={this.handleChange}
                  />
                </form>

                <form>
                  <input
                    className='p-3 input-contain'
                    placeholder='Location'
                    value={user.location}
                    name='location'
                    required
                    autoFocus
                    onChange={this.handleChange}
                  />
                </form>

                <form>
                  <input
                    className='p-3 input-contain'
                    placeholder='Password'
                    value={user.password}
                    name='password'
                    required
                    autoFocus
                    onChange={this.handleChange}
                  />
                </form>
                
        </div>
            </div>

            <div className='d-flex flex-column mt-2'>

              <div className='list-div mx-auto px-4 py-3'> <BsGear className='user-icon' /> Preferences</div>

              <div className='list-div  mx-auto px-4 py-3'> <RiCalendarEventLine className='user-icon' /> Calendar</div>

              <div className='list-div  mx-auto px-4 py-3'> <FiHeart className='user-icon' /> Favorite Services</div>

              <div className='list-div  mx-auto px-4 py-3'> <RiNotification3Line className='user-icon' /> Notification Settings</div>

              <Dialog>
                {dialog => {
                  async function handleClick() {
                    const confirmed = await dialog.confirm("Are you sure you want to delete your acount?");
                    console.log(confirmed);
                    let id = this.props.match.params.id
                    const deleteThatUser = await confirmed ? deleteUser(id) : null
                    return deleteThatUser
                  }
                  return <> <div className='list-div mx-auto px-4 py-3 mb-3' onClick={handleClick}> <FiTrash className='user-icon' /> Delete My Account</div></>
                }}
              </Dialog>
              </div>
          </div>
          
        <div className='d-flex flex-column mx-auto'>
          <form>
          {
                user.imgUrl ?
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img className='rounded-circle rounded-sm mt-5 mb-3 user-img' src={user.imgUrl} alt={user.name} />
                    <Accordion className='accord'>
                      <Card className='border-0 accord'>
                        <Accordion.Toggle className='accord border-0' as={Card.header} variant="link" eventKey="0">
                          Change Profile Photo
                        </Accordion.Toggle >
                        <Accordion.Collapse className='accord' eventKey="0">
                            
                            <input
                              name='imgUrl'
                              value={user.imgUrl}
                              onChange={this.handleChange}
                            /> 
                      </Accordion.Collapse>
                      </Card>
                      </Accordion>
                </div>
                    
                  :
                  <div className='d-flex flex-column '>
                    <img className='rounded-circle mt-5 user-img' src='https://i.imgur.com/36nRvIA.jpg' alt={user.name} />
                  <input
                name='imgUrl'
                value={user.imgUrl}
                onChange={this.handleChange}
              /> 
                  </div>
          }
            </form>


            <div className='save-contain mr-auto d-flex flex-column mt-5'>
              <button className='mt-5 matchsettings-btn'>CHANGE MATCH SETTINGS</button>
            <button className='mt-5 mx-auto save-btn' onClick={this.handleSubmit}>SAVE</button>
            </div>
          </div>
        </div>
  </Layout>
    )
  }
}
export default withRouter(UserEdit)