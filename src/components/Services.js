import React from 'react';
import Service from './Service';
const Services = () => {
  const services = ['Online appointment', 'Emergency Case', 'Our Doctors'];
  return (
    <div className='service-cards'>
      {services.map((service) => (
        <Service service={service} />
      ))}
    </div>
  );
};

export default Services;
