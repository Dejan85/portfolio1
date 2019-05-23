import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className='home__list'>
      <li className='home__item'>
        <Link className='home__link' to='/'>
          Home
        </Link>
      </li>
      <li className='home__item'>
        <Link className='home__link' to='/'>
          About
        </Link>
      </li>
      <li className='home__item'>
        <Link className='home__link' to='/'>
          Services
        </Link>
      </li>
      <li className='home__item'>
        <Link className='home__link' to='/'>
          Team
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
