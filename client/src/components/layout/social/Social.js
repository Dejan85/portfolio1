import React from 'react';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <div className='social'>
      <ul className="social__list">
        <li className="social__item">
          <Link className="social__link">Github</Link>
        </li>
        <li className="social__item">
          <Link className="social__link">Linkedin</Link>
        </li>
        <li className="social__item">
          <Link className="social__link">Gmail</Link>
        </li>
        <li className="social__item">
          <Link className="social__link">Facebook</Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
