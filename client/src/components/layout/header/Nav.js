import React, { useState } from "react";
import { Link } from "react-scroll";

const Nav = ({ xad }) => {
  // console.log(xad);
  const { duration } = useState(500);

  const handleDrop = () => {
    xad = "pusi kurac";
    console.log(xad);
    console.log("radi");
  };

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
