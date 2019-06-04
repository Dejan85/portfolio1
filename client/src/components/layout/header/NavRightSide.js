import React, { useState } from "react";
import { Link } from "react-scroll";

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
        <Link
          className="header__link header__link--right"
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Portoflio
        </Link>
      </li>
      <li className="header__item">
        <Link
          className="header__link header__link--right"
          activeClass="active"
          to="blog"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Blog
        </Link>
      </li>
      <li className="header__item">
        <Link
          className="header__link header__link--right"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={"true"}
          duration={duration}>
          Kontakt
        </Link>
      </li>
    </ul>
  );
};

export default NavRightSide;
