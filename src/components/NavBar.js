import React from 'react';
import NavItem from './NavItem';
import { HiArrowSmRight } from 'react-icons/hi';

const logo = require('../assets/img/logo.png');
const navItems = ['Home', 'Services', 'About us', 'Doctors', 'Contact Us'];
const NavBar = () => {
  return (
    <div className='nav-bar'>
      <img src={logo} alt='' />
      <ul className='nav-items'>
        {navItems.map((item) => (
          <NavItem item={item} />
        ))}
      </ul>
      <button className='btn'>
        Buy Now
        <HiArrowSmRight />
      </button>
    </div>
  );
};

export default NavBar;
