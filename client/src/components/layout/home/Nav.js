import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const { duration } = useState(500);

  return (
    <ul className="home__list">
      <li className="home__item">
        <Link
          className="home__link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={"true"}
          // offset={-400}
          duration={duration}>
          Home
        </Link>
      </li>
      <li className="home__item">
        <Link
          className="home__link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={"true"}
          // offset={-400}
          duration={duration}>
          About
        </Link>
      </li>
      <li className="home__item">
        <Link
          className="home__link"
          activeClass="active"
          to="services"
          spy={true}
          smooth={"true"}
          // offset={-400}
          duration={duration}>
          Services
        </Link>
      </li>
      <li className="home__item">
        <Link
          className="home__link"
          activeClass="active"
          to="works"
          spy={true}
          smooth={"true"}
          // offset={-400}
          duration={duration}>
          Popular
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
