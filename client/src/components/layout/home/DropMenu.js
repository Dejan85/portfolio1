import React from 'react';
import { Link } from 'react-router-dom';

const DropMenu = () => {
  return (
    <div className='drop__menu'>
      <ul className='drop__menu__list'>
        <li className='drop__menu__item'>
          <Link className='drop__menu__link'>Home</Link>
        </li>
        <li className='drop__menu__item'>
          <Link className='drop__menu__link'>About</Link>
        </li>
        <li className='drop__menu__item'>
          <Link className='drop__menu__link'>Services</Link>
        </li>
        <li className='drop__menu__item'>
          <Link className='drop__menu__link'>Team</Link>
        </li>
        <li className='drop__menu__item'>
          <Link className='drop__menu__link'>Skills</Link>
        </li>
        <li className='drop__menu__item'>
          <Link className='drop__menu__link'>Portfolio</Link>
        </li>
        <li className='drop__menu__item'>
          <Link className='drop__menu__link'>Blog</Link>
        </li>
        <li className='drop__menu__item'>
          <Link className='drop__menu__link'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropMenu;
