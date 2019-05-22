import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="home__nav">
      <ul className="home__list">
        <li className="home__item">
          <Link className="home__link" to="/">
            Home
          </Link>
        </li>
        <li className="home__item">
          <Link className="home__link" to="/">
            About
          </Link>
        </li>
        <li className="home__item">
          <Link className="home__link" to="/">
            Services
          </Link>
        </li>
        <li className="home__item">
          <Link className="home__link" to="/">
            Team
          </Link>
        </li>
        <li className="home__item home__item--background">
          <Link className="home__link" to="/">
            Skills
          </Link>
        </li>
        <li className="home__item home__item--background">
          <Link className="home__link" to="/">
            Portoflio
          </Link>
        </li>
        <li className="home__item home__item--background">
          <Link className="home__link" to="/">
            Blog
          </Link>
        </li>
        <li className="home__item home__item--background">
          <Link className="home__link" to="/">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
