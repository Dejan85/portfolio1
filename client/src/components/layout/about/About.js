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
          <div className='about__col-1'>
            <i className='fab fa-html5' />
            <h3 className='about__h3'>Html/Css/Sass</h3>
            <p className='about_col__p'>
              We at Caliber design and create brilliance at work in a uniquely
              stylish process.
            </p>
          </div>
          <div className='about__col-2'>
            <i className='fab fa-js-square' />
            <h3 className='about__h3p'>Javascript</h3>
            <p className='about_col__p'>
              We at Caliber design and create brilliance at work in a uniquely
              stylish process.
            </p>
          </div>
          <div className='about__col-3'>
            <i className='fab fa-react' />
            <h3 className='about__h3'>React/Redux</h3>
            <p className='about_col__p'>
              We at Caliber design and create brilliance at work in a uniquely
              stylish process.
            </p>
          </div>
          <div className='about__col-4'>
            <i className='fab fa-node-js' />
            <h3 className='about__h3'>Node/Express</h3>
            <p className='about_col__p'>
              We at Caliber design and create brilliance at work in a uniquely
              stylish process.
            </p>
          </div>
          <div className='about__col-5'>
            <i className='fas fa-database' />
            <h3 className='about__h3'>Mongo/Mongoose</h3>
            <p className='about_col__p'>
              We at Caliber design and create brilliance at work in a uniquely
              stylish process.
            </p>
          </div>
          <div className='about__col-6'>
            <i class='fas fa-laptop-code' />
            <h3 className='about__h3'>Other</h3>
            <p className='about_col__p'>
              We at Caliber design and create brilliance at work in a uniquely
              stylish process.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
