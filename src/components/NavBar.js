import React from 'react';
import NavItem from './NavItem';
import { NavLink } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';

const NavBar = () => {
  const logo = require('../assets/img/logo.png');
  const navItems = ['Home', 'Services', 'About us', 'Doctors', 'Contact Us'];
  // const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='nav-bar'>
      <img src={logo} alt='' onClick={() => handleClick()} />
      <ul className='nav-items'>
        {navItems.map((item) => (
          <NavLink
            to={item}
            key={Math.floor(Math.random() * 1000000)}
            className={({ isActive }) => (isActive ? 'is-active' : '')}>
            <NavItem item={item} />
          </NavLink>
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
