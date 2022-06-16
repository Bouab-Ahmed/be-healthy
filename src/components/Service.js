import React from 'react';
import { AiFillPhone } from 'react-icons/ai';

let srvc1 = require('../assets/img/srvc1.png');
let srvc2 = require('../assets/img/srvc2.png');
let srvc3 = require('../assets/img/srvc3.png');

const Service = ({ service }) => {
  return service === 'Online appointment' ? (
    <div className='card'>
      <img src={srvc1} alt='' />
      <h2>{service}</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>
      {/* hna ki teclicki 3liha tedik le appointment page */}
      <h3>Make an appointment</h3>
    </div>
  ) : service === 'Emergency Case' ? (
    <div className='card'>
      <img src={srvc2} alt='' />
      <h2>{service}</h2>
      <p>Lorem Ipsum is simply dummy </p>
      <div className='phone'>
        <AiFillPhone />
        +213 761 718 190
      </div>
      {/* hna ki teclicki 3liha tedik le contact section */}
      <h3>Contact Us</h3>
    </div>
  ) : service === 'Our Doctors' ? (
    <div className='card'>
      <img src={srvc3} alt='' />
      <h2>{service}</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>
      {/* hna ki teclicki 3liha tedik le doctors section */}
      <h3>Doctors</h3>
    </div>
  ) : null;
};

export default Service;
