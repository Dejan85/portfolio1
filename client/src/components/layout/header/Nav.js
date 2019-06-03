import React, { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const { duration } = useState(500);

  return (
    <ul className="header__list">
      <li className="header__item">
        <Link
          className="header__link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Home
        </Link>
      </li>
      <li className="header__item">
        <Link
          className="header__link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={"true"}
          duration={duration}>
          About
        </Link>
      </li>
      <li className="header__item">
        <Link
          className="header__link"
          activeClass="active"
          to="services"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Services
        </Link>
      </li>
      <li className="header__item">
        <Link
          className="header__link"
          activeClass="active"
          to="works"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Popular
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
