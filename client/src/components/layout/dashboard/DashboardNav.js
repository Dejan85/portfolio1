import React, { useState } from "react";
import PropTypes from "prop-types";

const DashboardNav = ({ name, handleSubNav, liName, height }) => {
  const [subList, setSubList] = useState();
  const [style, setStayle] = useState({});
  const [dropMenu, setDropMenu] = useState(true);

  const handleNavigation = () => {
    setDropMenu(() => {
      return !dropMenu;
    });

    if (dropMenu) {
      setStayle({
        transform: "rotate(180deg)",
        transition: "all 0.5s",
      });

      setSubList({
        height: `${height}`,
      });
    } else {
      setStayle({
        transform: "rotate(0deg)",
        transition: "all 0.5s",
      });

      setSubList({
        height: "0px",
      });
    }
  };

  return (
    <ul className="dashobard__list">
      <li className="dashboard__item" onClick={handleNavigation}>
        <i className="fas fa-user-circle" />
        <p>{name}</p>
        <i
          className="fas fa-chevron-down dashboard__icon--arow"
          style={style}
        />
      </li>
      <ul className="dashboard__sub-list" style={subList}>
        {liName.map((item, index) => {
          return (
            <li key={index} data-acc={`${item}`} onClick={handleSubNav}>
              {item}
            </li>
          );
        })}
      </ul>
    </ul>
  );
};

DashboardNav.propTypes = {
  name: PropTypes.string,
  handleSubNav: PropTypes.func,
  liName: PropTypes.array,
  height: PropTypes.string,
};

export default DashboardNav;
