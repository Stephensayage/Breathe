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

        <div className='icon-holder d-flex justify-content-end'>
          <FaFacebook className='icon '/>
          <AiFillTwitterCircle className='icon '/> 
          <FaInstagram className='icon '/>
        </div>

        <div className="text-muted copy">
          <small>Copyright &copy;{new Date().getFullYear()} Breathe | All rights reserved</small></div>
      </div>
    </div>
  </div>
export default Footer