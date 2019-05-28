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
          <Link className="social__link">xypnotica@gmail.com</Link>
        </li>
        <li className="social__item">
          <Link className="social__link">facebook</Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
