import React from 'react'
import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => (
  <div className='page-container'>
    
    <div className='content-wrap'>
      <Nav />
    <div className="layout-children">
      {props.children}
      </div>
    </div>
    <Footer />
  </div>
)

export default Layout