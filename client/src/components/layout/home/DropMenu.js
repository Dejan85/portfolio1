import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const DropMenu = () => {
  const [transition, setTransition] = useState({});
  const { duration } = useState(500);

  useEffect(() => {
    setTransition({
      opacity: 1,
      transition: "all 0.5s"
    });
  }, []);

  return (
    <div className="drop__menu" style={transition}>
      <ul className="drop__menu__list">
        <li className="drop__menu__item">
          <Link
            className="drop__menu__link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Home
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link
            className="drop__menu__link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            About
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link
            className="drop__menu__link"
            activeClass="active"
            to="services"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Services
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link
            className="drop__menu__link"
            activeClass="active"
            to="works"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Popular
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link
            className="drop__menu__link"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Skills
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link
            className="drop__menu__link"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Portfolio
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link
            className="drop__menu__link"
            activeClass="active"
            to="blog"
            spy={true}
            smooth={"true"}
            // offset={-400}
            duration={duration}>
            Blog
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link
            className="drop__menu__link"
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
    </div>
  );
};

export default DropMenu;
