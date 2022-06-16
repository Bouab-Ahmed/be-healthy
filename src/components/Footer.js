import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='right-footer'>
        <img src={require('../assets/img/logo.png')} alt='' />
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
        </ul>
        <ul>
          <li>Doctors</li>
          <li>Contact Us</li>
        </ul>
        <div className='socialMedia'>
          <FaFacebookF />
          <FaTwitter />
        </div>
      </div>
      <div className='left-footer'>
        <div className='phone'>
          <AiFillPhone />
          +213 761 718 190
        </div>
        <h6>username@email.com</h6>
      </div>
    </div>
  );
};

export default Footer;
