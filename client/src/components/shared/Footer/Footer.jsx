import React from 'react'
import {Link} from 'react-router-dom'
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
            <Link><li className='text-dark'>ABOUT</li></Link>
            <Link><li className='text-dark'>CAREERS</li></Link>
            <Link><li className='text-dark'>TERMS OF SERVICE</li></Link>
            <Link><li className='text-dark'>PRIVACY POLICY</li></Link>
          </ul>
        </div>
        {/* Column 2 */}

        <div className='col'>
          <ul className='list-unstyled'>
            <Link><li className='text-dark'>CONTACT</li></Link>
            <Link><li className='text-dark'>HELP</li></Link>
            <Link><li className='text-dark'>FREQUENTLY ASKED QUESTIONS</li></Link>

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