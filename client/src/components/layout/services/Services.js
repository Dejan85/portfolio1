import React, { Component } from 'react';

// components
import Line from '../utilities/Line';

class Services extends Component {
  render() {
    return (
      <div className='services'>
        <div className='services__content'>
          <div className='services__h2--container'>
            <h2 className='services__h2'>Art of work</h2>
            <Line />
          </div>

          <div className='services__box'>
            <div className='services__icon'>
              <i className='fas fa-desktop' />
            </div>
            <div className='services__box__container'>
              <h3 className='services__h3'>Static Page</h3>
              <p className='services__p'>
                We at Caliber design and create brilliance at work in a uniquely
                stylish process.
              </p>
            </div>
          </div>

          <div className='services__box'>
            <div className='services__icon'>
              <i className='fas fa-desktop' />
            </div>
            <div className='services__box__container'>
              <h3 className='services__h3'>Web App</h3>
              <p className='services__p'>
                We at Caliber design and create brilliance at work in a uniquely
                stylish process.
              </p>
            </div>
          </div>

          <div className='services__box'>
            <div className='services__icon'>
              <i className='fas fa-desktop' />
            </div>
            <div className='services__box__container'>
              <h3 className='services__h3'>Fullstack </h3>
              <p className='services__p'>
                We at Caliber design and create brilliance at work in a uniquely
                stylish process.
              </p>
            </div>
          </div>
        </div>
        <div className='services__decoration-div' />
      </div>
    );
  }
}

export default Services;
