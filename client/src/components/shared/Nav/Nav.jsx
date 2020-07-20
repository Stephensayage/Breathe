import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


export default function Navigation() {

  return (

    <Navbar collapseOnSelect expand="sm" className='custom-nav' variant='light' sticky='top'>
      <Navbar.Brand><Link className='text-dark custom-font' to='/'>Breathe</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Link className='nav-link text-dark' to='/'>My Account</Link>
          <Link className='nav-link text-dark' to='/'>My Matches</Link>
          <Link className='nav-link text-dark' to='/'>Favorites</Link>
          <Link className='nav-link text-dark' to='/'>Explore Services</Link>
          <Link className='nav-link text-dark' to='/'>Confidentiality Policy</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
