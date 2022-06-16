import React from 'react';
const features = [
  'Pediatry',
  'Dentistry',
  'Injection',
  'Cardiology',
  'Blood transfusion',
  'X-Ray',
];
const Features = () => {
  return (
    <div className='features'>
      <div className='left-feature'>
        <h2>
          Our features <br /> services
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's Lorem Ipsum has been the
          industry's
        </p>
        <button className='btn'>Our Services</button>
      </div>
      <div className='right-feature'>
        {features.map((feature, i) => {
          return (
            <div className='ft' key={Math.floor(Math.random() * 1000)}>
              <img src={require(`../assets/img/ft${i + 1}.png`)} alt='' />
              <h6>{feature}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
