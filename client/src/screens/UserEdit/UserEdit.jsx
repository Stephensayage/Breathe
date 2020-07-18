import React, { Component } from 'react'
import { getUser, updateUser } from '../../services/users'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import { Accordion, Card, Button } from 'react-bootstrap'


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
      <div className='container-sm mt-5 mb-5 d-flex border'>
          <div className='mx-auto my-auto'>
            <div className='d-flex'>
          <label className='border m-2 px-4'>Name</label>
            <form>
              <input
                placeholder='Name'
                value={user.name}
                name='name'
                required
                autoFocus
                onChange={this.handleChange}
              />
            </form>
            </div>
          <div className='d-flex'>
            <label className='border m-2 px-4'>Location</label>
            <form>
              <input
                placeholder='Location'
                value={user.location}
                name='location'
                required
                autoFocus
                onChange={this.handleChange}
              />
            </form>
            </div>
            <div className='d-flex'>
            <label className='border m-2 px-4'>Password</label>
            <form>
              <input
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
        

        <div className=' d-flex flex-column mx-auto'>
          <form>
          {
                user.imgUrl ?
                  <div classname='mx-auto'>
                  <img src={user.imgUrl} alt={user.name} />
                  <Accordion>
                    <Card className='border-0'>
                      {/* <Card.Header> */}
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          Change Profile Photo
                        </Accordion.Toggle>
                      {/* </Card.Header> */}
                      <Accordion.Collapse eventKey="0">
                          {/* <Card.Body> */}
                            
                            <input
                              name='imgUrl'
                              value={user.imgUrl}
                              onChange={this.handleChange}
                            /> 
                             
                        {/* </Card.Body> */}
                      </Accordion.Collapse>
                      </Card>
                      </Accordion>
                </div>
                    
                  :
                  <div className='d-flex flex-column '>
                  <img src='https://i.imgur.com/36nRvIA.jpg' alt={user.name} />
                  <input
                name='imgUrl'
                value={user.imgUrl}
                onChange={this.handleChange}
              /> 
                </div>
          }

            </form>
            <div className='save-contain mr-auto d-flex flex-column  mb-5'>
              <button className='mt-3'>Change Match Settings</button>
            <button className='mt-5' onClick={this.handleSubmit}>SAVE</button>
            </div>
          </div>
        </div>
  </Layout>
    )
  }
}
export default withRouter(UserEdit)