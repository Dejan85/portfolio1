import React from 'react';
import { Link } from 'react-router-dom';

const NavRightSide = () => {
  return (
    <nav className='home__nav'>
      <ul className='home__list'>
        <li className='home__item'>
          <Link className='home__link home__link--right' to='/'>
            Skills
          </Link>
        </li>
        <li className='home__item'>
          <Link className='home__link home__link--right' to='/'>
            Portoflio
          </Link>
        </li>
        <li className='home__item'>
          <Link className='home__link home__link--right' to='/'>
            Blog
          </Link>
        </li>
        <li className='home__item'>
          <Link className='home__link home__link--right' to='/'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavRightSide;
