import React from 'react';
import './Nav.css'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import UserImage from "../UserImageFolder/UserImage"

function Navigation(props) {
  let id = props.location.pathname
  return (

    <Navbar collapseOnSelect expand="sm" className='custom-nav' variant='light' sticky='top'>
      <Navbar.Brand><Link className='text-dark custom-font' to={`/${props.userId}`}><img className="breathe" src="https://svgshare.com/i/N3B.svg" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mb-0 mt-5 ml-auto mr-auto">
          <Link className='nav-link text-dark' to={id.includes('5') ? `/userdisplay/${props.userId}` : '/usercreate'}><strong>MY ACCOUNT</strong></Link>
          <Link className='nav-link text-dark' to={id.includes('5') ? `/matchchoices/${props.userId}` : '/usercreate'}><strong>MY MATCHES</strong></Link>
          <Link className='nav-link text-dark' to='/'><strong>FAVORITES</strong></Link>
          <Link className='nav-link text-dark' to='/'><strong>EXPLORE SERVICES</strong></Link>
          <Link className='nav-link text-dark' to='/confidentiality'><strong>CONFIDENTIALITY POLICY</strong></Link>
        </Nav>
        <UserImage />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Navigation)