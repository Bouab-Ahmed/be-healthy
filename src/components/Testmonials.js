import React from 'react';
import { Carousel } from 'rsuite';
const Testmonials = () => {
  return (
    <div>
      <h4>testimonials</h4>
      <h1>Trust our patients </h1>
      <Carousel className='custom-slider'>
        <img
          src='https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2.png'
          height='150'
        />
        <img
          src='https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1.png'
          height='150'
        />
      </Carousel>
      {/* <Carousel>
        <img src={require('../assets/img/carousel.png')} height='150' alt='' />
        <img src={require('../assets/img/carousel.png')} height='150' alt='' />
        <img src={require('../assets/img/carousel.png')} height='150' alt='' />
        {/* <div>
          <p>
            Thank you, cheikh massoud for correct diagnosis <br /> and for
            healing my son
          </p>
        </div>
        <div>
          <img src={require('../assets/img/carousel.png')} alt='' />
          <p>
            Thank you, cheikh massoud for correct diagnosis <br /> and for
            healing my son
          </p>
        </div>
        <div>
          <img src={require('../assets/img/carousel.png')} alt='' />
          <p>
            Thank you, cheikh massoud for correct diagnosis <br /> and for
            healing my son
          </p>
        </div>
        <div>
          <img src={require('../assets/img/carousel.png')} alt='' />
          <p>
            Thank you, cheikh massoud for correct diagnosis <br /> and for
            healing my son
          </p>
        </div> */}
      {/* </Carousel> */}
    </div>
  );
};

export default Testmonials;
