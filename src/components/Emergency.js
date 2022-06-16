import React from 'react';

const Emergency = () => {
  return (
    <div className='Emergency'>
      <div className='right-about-us'>
        <h2>
          Need an Emergency <br /> Help? Call Us!
        </h2>
        <div className='phone'>+213 761 718 190</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <button className='btn'>Make an appointment</button>
      </div>
      <img src={require('../assets/img/emergency.png')} alt='' />
    </div>
  );
};

export default Emergency;
