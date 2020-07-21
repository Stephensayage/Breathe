import React, {useState, useEffect}from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import UserImage from "../UserImageFolder/UserImage"

export default function Navigation(props) {
  
  return (

    <Navbar collapseOnSelect expand="sm" className='custom-nav' variant='light' sticky='top'>
      <Navbar.Brand><Link className='text-dark custom-font' to={`/${props.userId}`}>Breathe</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Link className='nav-link text-dark' to={`/userdisplay/${props.userId}`}>My Account</Link>
          <Link className='nav-link text-dark' to={`/matchchoices/${props.userId}`}>My Matches</Link>
          <Link className='nav-link text-dark' to='/'>Favorites</Link>
          <Link className='nav-link text-dark' to='/'>Explore Services</Link>
          <Link className='nav-link text-dark' to='/'>Confidentiality Policy</Link>
          <UserImage />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
