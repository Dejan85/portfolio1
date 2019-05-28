import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Images
// import pigGame from '../../../sass/images/pigGame.png';
// import colorGame from '../../../sass/images/colorGame.png';
// import toDoApp from '../../../sass/images/toDoApp.png';

import pigGame_grey from '../../../sass/images/pigGame_grey.jpg';
import colorGame_grey from '../../../sass/images/colorGame_grey.jpg';
import toDoApp_grey from '../../../sass/images/toDoApp_grey.jpg';

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
                <img
                  className='works__card--img'
                  src={pigGame_grey}
                  alt='slika'
                />
              </div>

              <h4 className='works__card__h4'>Pig Game</h4>
              <p className='works__card__p'>
                Ovo je mala React Js aplikacija. U pitanju je vec poznata igra
                Pig Game. Dva igraca bacaju kockice i pokusavaju prvi da
                dostignu odredjen broj pojena koji su prethodno rucno odredili.
                Igra je pisana u React-u. Kao Context menager je koriscen
                Contect api. Vise u ovoj aplikaciji mozete videti na njenoj
                stranici.
              </p>
            </div>

            <div className='works__card__back'>BACK</div>
          </div>

          <div className='works__card'>
            <div className='works__card__front'>
              <div className='works__card__img'>
                <div className='works__card--mask' />
                <img
                  className='works__card--img'
                  src={toDoApp_grey}
                  alt='slika'
                />
              </div>

              <h4 className='works__card__h4'>To Do App</h4>
              <div />
              <p className='works__card__p'>
                Ovo je mala React Js aplikacija. U pitanju je vec poznata igra
                Pig Game. Dva igraca bacaju kockice i pokusavaju prvi da
                dostignu odredjen broj pojena koji su prethodno rucno odredili.
                Igra je pisana u React-u. Kao Context menager je koriscen
                Contect api. Vise u ovoj aplikaciji mozete videti na njenoj
                stranici.
              </p>
            </div>

            <div className='works__card__back'>BACK</div>
          </div>

          <div className='works__card'>
            <div className='works__card__front'>
              <div className='works__card__img'>
                <div className='works__card--mask' />
                <img
                  className='works__card--img'
                  src={colorGame_grey}
                  alt='slika'
                />
              </div>

              <h4 className='works__card__h4'>Color Game</h4>
              <p className='works__card__p'>
                Ovo je mala React Js aplikacija. U pitanju je vec poznata igra
                Pig Game. Dva igraca bacaju kockice i pokusavaju prvi da
                dostignu odredjen broj pojena koji su prethodno rucno odredili.
                Igra je pisana u React-u. Kao Context menager je koriscen
                Contect api. Vise u ovoj aplikaciji mozete videti na njenoj
                stranici.
              </p>
            </div>

            <div className='works__card__back'>BACK</div>
          </div>
        </div>
        <div className='works__discover'>
          <Link className='works__discover--link' to='/'>
            Discover all projects
          </Link>
        </div>
      </div>
    );
  }
}

export default Works;
