import React from 'react';
import Service from './Service';
const services = ['Online appointment', 'Emergency Case', 'Our Doctors'];
const Services = () => {
  return (
    <div className='service-cards'>
      {services.map((service) => (
        <Service key={Math.floor(Math.random() * 1000)} service={service} />
      ))}
    </div>
  );
};

export default Services;
