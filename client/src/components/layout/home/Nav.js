import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='home__nav'>
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
    </nav>
  );
};

export default Nav;
