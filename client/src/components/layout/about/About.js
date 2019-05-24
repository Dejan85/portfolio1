import React, { Component } from 'react';

//components
import Line from '../utilities/Line';

class About extends Component {
  render() {
    return (
      <div className='about container'>
        <h2 className='about__h2'>Why Choose Me</h2>
        <Line />
        <p className='about__p'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean commodo
          eget dolor aenean massa eget dolor aenean massa
        </p>
        <div className='about__content'>
          <div className='about__box'>
            <div className='about__icon--container'>
              <i
                className='fab fa-html5 about__icon'
                style={{ color: '#F16529' }}
              />
            </div>
            <div className='about__box--container'>
              <h3 className='about__h3'>Html/Css/Sass</h3>
              <p className='about__box__p'>
                We at Caliber design and create brilliance at work in a uniquely
                stylish process.
              </p>
            </div>
          </div>

          <div className='about__box'>
            <div className='about__icon--container'>
              <i
                className='fab fa-js-square about__icon'
                style={{ color: '#F7DF1D' }}
              />
            </div>
            <div className='about__box--container'>
              <h3 className='about__h3'>Javascript</h3>
              <p className='about__box__p'>
                We at Caliber design and create brilliance at work in a uniquely
                stylish process.
              </p>
            </div>
          </div>

          <div className='about__box'>
            <div className='about__icon--container'>
              <i
                className='fab fa-react about__icon'
                style={{ color: '#53C1DE' }}
              />
            </div>
            <div className='about__box--container'>
              <h3 className='about__h3'>React/Redux</h3>
              <p className='about__box__p'>
                We at Caliber design and create brilliance at work in a uniquely
                stylish process.
              </p>
            </div>
          </div>

          <div className='about__box'>
            <div className='about__icon--container'>
              <i
                className='fab fa-node-js about__icon'
                style={{ color: '#77B163' }}
              />
            </div>
            <div className='about__box--container'>
              <h3 className='about__h3'>Node/Express</h3>
              <p className='about__box__p'>
                We at Caliber design and create brilliance at work in a uniquely
                stylish process.
              </p>
            </div>
          </div>

          <div className='about__box'>
            <div className='about__icon--container'>
              <i
                className='fas fa-database about__icon'
                style={{ color: '#16A54E' }}
              />
            </div>
            <div className='about__box--container'>
              <h3 className='about__h3'>Mongo Db</h3>
              <p className='about__box__p'>
                We at Caliber design and create brilliance at work in a uniquely
                stylish process.
              </p>
            </div>
          </div>

          <div className='about__box'>
            <div className='about__icon--container'>
              <i className='fas fa-skiing about__icon' />
              {/* <i className='fab fa-linux about__icon' /> */}
              {/* <i class='fab fa-suse about__icon' /> */}
            </div>
            <div className='about__box--container'>
              <h3 className='about__h3'>Other</h3>
              <p className='about__box__p'>
                We at Caliber design and create brilliance at work in a uniquely
                stylish process.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
