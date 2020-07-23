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
            <li>ABOUT</li>
            <li>CAREERS</li>
            <li>TERMS OF SERVICE</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        {/* Column 2 */}

        <div className='col'>
          <ul className='list-unstyled'>
            <li>CONTACT</li>
            <li>HELP</li>
            <li>FREQUENTLY ASKED QUESTIONS</li>

          </ul>
        </div>

        <div className='icon-holder d-flex justify-content-end'>
          <FaFacebook className='icon '/>
          <FaInstagram className='icon '/>
          <AiFillTwitterCircle className='icon '/> 
        </div>

        <div className=" copy">
          <p className='text-muted'><small>Copyright &copy;{new Date().getFullYear()} Breathe | All rights reserved</small></p>
      </div>

      </div>
      </div>
    
  </div>
export default Footer