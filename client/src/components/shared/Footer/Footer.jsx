import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'


const Footer = () =>
  <div className='main-footer'>
    <div className='container'>
      <div className='row'>
        {/* Column 1 */}
        <div className='col'>
          <ul className='list-unstyled'>
            <li>About</li>
            <li>Careers</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Column 2 */}

        <div className='col'>
          <ul className='list-unstyled'>
            <li>Contact</li>
            <li>Help</li>
            <li>Frequently Asked Questions</li>

          </ul>
        </div>

        <div>
          <FaFacebook />
          <FaInstagram />
          <AiFillTwitterCircle /> 
        </div>

        <div className="text-muted">
          <small>Copyright &copy;{new Date().getFullYear()} Breathe | All rights reserved</small></div>
      </div>
    </div>
  </div>
export default Footer