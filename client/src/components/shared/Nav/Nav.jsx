import React, { useState, useEffect } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import UserImage from "../UserImageFolder/UserImage"

export default function Navigation(props) {

  return (

    <Navbar collapseOnSelect expand="sm" className='custom-nav' variant='light' sticky='top'>
      <Navbar.Brand><Link className='text-dark custom-font' to={`/${props.userId}`}><img className="breathe" src="https://svgshare.com/i/N3B.svg" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mb-0 mt-5 ml-auto mr-auto">
          <Link className='nav-link text-dark' to={`/userdisplay/${props.userId}`}><strong>MY ACCOUNT</strong></Link>
          <Link className='nav-link text-dark' to={`/matchchoices/${props.userId}`}><strong>MY MATCHES</strong></Link>
          <Link className='nav-link text-dark' to='/'><strong>FAVORITES</strong></Link>
          <Link className='nav-link text-dark' to='/'><strong>EXPLORE SERVICES</strong></Link>
          <Link className='nav-link text-dark' to='/'><strong>CONFIDENTIALITY POLICY</strong></Link>
        </Nav>
        <UserImage />
      </Navbar.Collapse>
    </Navbar>
  )
}
