import React from 'react';
import { AiOutlineReconciliation } from 'react-icons/ai';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';
import { GiDoctorFace } from 'react-icons/gi';

const Service = ({ service }) => {
  let srvc1 = require('../assets/img/srvc1.png');
  let srvc2 = require('../assets/img/srvc2.png');
  let srvc3 = require('../assets/img/srvc3.png');
  let card;
  service === 'Online appointment'
    ? (card = (
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
      ))
    : service === 'Emergency Case'
    ? (card = (
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
      ))
    : service === 'Our Doctors'
    ? (card = (
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
      ))
    : (card = null);
  return card;
};

export default Service;
