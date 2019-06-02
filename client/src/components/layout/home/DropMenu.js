import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DropMenu = () => {
  const [transition, setTransition] = useState({});

  useEffect(() => {
    setTransition({
      opacity: 1,
      transition: "all 0.5s"
    });
  }, []);

  console.log(transition);

  return (
    <div className="drop__menu" style={transition}>
      <ul className="drop__menu__list">
        <li className="drop__menu__item">
          <Link className="drop__menu__link" to="/">
            Home
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link className="drop__menu__link" to="/">
            About
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link className="drop__menu__link" to="/">
            Services
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link className="drop__menu__link" to="/">
            Team
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link className="drop__menu__link" to="/">
            Skills
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link className="drop__menu__link" to="/">
            Portfolio
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link className="drop__menu__link" to="/">
            Blog
          </Link>
        </li>
        <li className="drop__menu__item">
          <Link className="drop__menu__link" to="/">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropMenu;
