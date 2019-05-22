import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Team</Link>
        </li>
        <li>
          <Link>Skills</Link>
        </li>
        <li>
          <Link>Portoflio</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
