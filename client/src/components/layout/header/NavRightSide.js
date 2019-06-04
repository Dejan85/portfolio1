import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const NavRightSide = () => {
  const { duration } = useState(500);

  return (
    <ul className="header__list">
      {/* <li className="header__item">
        <Link
          className="header__link header__link--right"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Skills
        </Link>
      </li> */}
      <li className="header__item">
        <ScrollLink
          className="header__link header__link--right"
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Portoflio
        </ScrollLink>
      </li>
      <li className="header__item">
        <ScrollLink
          className="header__link header__link--right"
          activeClass="active"
          to="blog"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Blog
        </ScrollLink>
      </li>
      <li className="header__item">
        <ScrollLink
          className="header__link header__link--right"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Kontakt
        </ScrollLink>
      </li>

      <li className="header__item">
        <Link
          className="header__link header__link--right"
          // activeClass="active"
          to="/login"
          // spy={true}
          // smooth={"true"}
          // duration={duration}
        >
          Login
        </Link>
      </li>
    </ul>
  );
};

export default NavRightSide;
