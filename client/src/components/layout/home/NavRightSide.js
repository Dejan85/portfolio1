import React, { useState } from "react";
import { Link } from "react-scroll";

const NavRightSide = () => {
  const { duration } = useState(500);

  return (
    <nav className="home__nav">
      <ul className="home__list">
        <li className="home__item">
          <Link
            className="home__link home__link--right"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Skills
          </Link>
        </li>
        <li className="home__item">
          <Link
            className="home__link home__link--right"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Portoflio
          </Link>
        </li>
        <li className="home__item">
          <Link
            className="home__link home__link--right"
            activeClass="active"
            to="blog"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Blog
          </Link>
        </li>
        <li className="home__item">
          <Link
            className="home__link home__link--right"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavRightSide;
