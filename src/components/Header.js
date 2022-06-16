import React from 'react';

let header = require('../assets/img/header.png');
const Header = () => {
  return (
    <div className='header'>
      <div className='right-header'>
        <p>welcome on our clinic site</p>
        <h1>
          Make an <br /> appointment
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          dignissim nulla velit, vel aliquet lectus Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Morbi dignissim nulla velit, vel aliquet
          lectus
        </p>
        <div className='btns'>
          <button className='btn'>Contact Us</button>
          <button className='btn2'>Read more</button>
        </div>
      </div>
      <div className='left-header'>
        <img src={header} alt='' />
      </div>
    </div>
  );
};

export default Header;
