import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
const Doctors = () => {
  // let doc1 = require('../assets/img/doc1.png');
  // let doc2 = require('../assets/img/doc2.png');
  // let doc3 = require('../assets/img/doc3.png');
  const doctors = [
    {
      docName: 'Jennifer Lee',
      docProf: 'Pediatry Doctor',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
    },
    {
      docName: 'Sara wright',
      docProf: 'Denstist',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
    },
    {
      docName: 'massoud reducer',
      docProf: 'surgeon',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
    },
  ];
  console.log(doctors);
  return (
    <div className='doctors'>
      <h2>Doctors</h2>
      <div className='doctor-cards'>
        {doctors.map((doctor, i) => {
          return (
            <div key={Math.floor(Math.random() * 10)} className='dctr-card'>
              <img src={require(`../assets/img/doc${i + 1}.png`)} alt='' />
              <h2>{doctor.docName}</h2>
              <h3>{doctor.docProf}</h3>
              <p>{doctor.desc}</p>
              <div className='socialMedia'>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
