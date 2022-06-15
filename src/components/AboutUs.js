import React from 'react';

const AboutUs = () => {
  let aboutUsPic = require('../assets/img/aboutUs.png');
  return (
    <div className='about-us'>
      <img src={aboutUsPic} alt='' />
      <div className='right-about-us'>
        <h2>
          Meet <br /> our clinic
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <button className='btn'>About us</button>
      </div>
    </div>
  );
};

export default AboutUs;
