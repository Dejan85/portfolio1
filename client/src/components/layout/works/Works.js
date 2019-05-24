import React, { Component } from 'react';
import pigGame from '../../../sass/images/pigGame.png';
import colorGame from '../../../sass/images/colorGame.png';

// components
import Line from '../utilities/Line';

class Works extends Component {
  render() {
    return (
      <div className='works container'>
        <h2 className='works__h2'>MOST POPULAR</h2>
        <Line />
        <p className='works__p'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean commodo
          eget dolor aenean massa eget dolor aenean massa
        </p>
        <div className='works__content'>
          <div className='works__card'>
            <div className='works__card__front'>
              <div className='works__card__img'>
                <div className='works__card--mask' />
                <img className='works__card--img' src={pigGame} />
              </div>
            </div>

            <div className='works__card__back'>BACK</div>
          </div>

          <div className='works__card'>
            <div className='works__card__front'>
              <div className='works__card__img'>
                <div className='works__card--mask' />
                <img className='works__card--img' src={colorGame} />
              </div>
            </div>

            <div className='works__card__back'>BACK</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
