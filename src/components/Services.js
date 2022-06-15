import React from 'react';
import Service from './Service';
const Services = () => {
  const services = ['Online appointment', 'Emergency Case', 'Our Doctors'];
  return (
    <div className='service-cards' key={Math.floor(Math.random() * 1000)}>
      {services.map((service) => (
        <Service service={service} />
      ))}
    </div>
  );
};

export default Services;
