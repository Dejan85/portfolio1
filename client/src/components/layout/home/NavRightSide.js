import React from 'react';
import { Link } from 'react-router-dom';

const NavRightSide = () => {
  return (
    <nav className='home__nav'>
      <ul className='home__list'>
        <li className='home__item home__item--background'>
          <Link className='home__link' to='/'>
            Skills
          </Link>
        </li>
        <li className='home__item home__item--background'>
          <Link className='home__link' to='/'>
            Portoflio
          </Link>
        </li>
        <li className='home__item home__item--background'>
          <Link className='home__link' to='/'>
            Blog
          </Link>
        </li>
        <li className='home__item home__item--background'>
          <Link className='home__link' to='/'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavRightSide;
