import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

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
          <ScrollLink
            className="drop__menu__link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={"true"}
            duration={duration}>
            Home
          </ScrollLink>
        </li>
        <li className="drop__menu__item">
          <ScrollLink
            className="drop__menu__link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={"true"}
            duration={duration}>
            About
          </ScrollLink>
        </li>
        <li className="drop__menu__item">
          <ScrollLink
            className="drop__menu__link"
            activeClass="active"
            to="services"
            spy={true}
            smooth={"true"}
            duration={duration}>
            Services
          </ScrollLink>
        </li>
        <li className="drop__menu__item">
          <ScrollLink
            className="drop__menu__link"
            activeClass="active"
            to="works"
            spy={true}
            smooth={"true"}
            duration={duration}>
            Popular
          </ScrollLink>
        </li>
        <li className="drop__menu__item">
          <ScrollLink
            className="drop__menu__link"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={"true"}
            duration={duration}>
            Skills
          </ScrollLink>
        </li>
        <li className="drop__menu__item">
          <ScrollLink
            className="drop__menu__link"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={"true"}
            duration={duration}>
            Portfolio
          </ScrollLink>
        </li>
        <li className="drop__menu__item">
          <ScrollLink
            className="drop__menu__link"
            activeClass="active"
            to="blog"
            spy={true}
            smooth={"true"}
            duration={duration}>
            Blog
          </ScrollLink>
        </li>
        <li className="drop__menu__item">
          <ScrollLink
            className="drop__menu__link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={"true"}
            duration={duration}>
            Contact
          </ScrollLink>
        </li>

        <li className="drop__menu__item">
          <Link className="drop__menu__link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropMenu;
