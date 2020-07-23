import React, { useState, useEffect } from 'react';
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
          <Link className='nav-link text-dark' to={id.includes('5') ? `/userdisplay/${props.userId}` : '/usercreate'}><strong>My Account</strong></Link>
          <Link className='nav-link text-dark' to={id.includes('5') ? `/matchchoices/${props.userId}` : '/usercreate'}><strong>My Matches</strong></Link>
          <Link className='nav-link text-dark' to='/'><strong>Favorites</strong></Link>
          <Link className='nav-link text-dark' to='/'><strong>Explore Services</strong></Link>
          <Link className='nav-link text-dark' to='/confidentiality'><strong>Confidentiality Policy</strong></Link>
        </Nav>
        <UserImage />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Navigation)