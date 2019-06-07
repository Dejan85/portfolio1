import React, { useState } from "react";

const Dashboard = () => {
  const [dropMenu, setDropMenu] = useState(true);
  const [subList, setSubList] = useState();
  const [style, setStayle] = useState({});

  const handleNavigation = () => {
    setDropMenu(() => {
      return !dropMenu;
    });

    if (dropMenu) {
      setStayle({
        transform: "rotate(180deg)",
        transition: "all 0.5s"
      });

      setSubList({
        // display: "block",
        height: "100px",
        background: "red"
      });
    } else {
      setStayle({
        transform: "rotate(0deg)",
        transition: "all 0.5s"
      });

      setSubList({
        height: "0px"
        // display: "none"
      });
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="dashboard__logo">Devxad</div>
        <div className="dashboard__header-nav">Header nav</div>
      </div>
      <div className="dashboard__content">
        <div className="dashboard__nav">
          <ul className="dashobard__list">
            <li className="dashboard__item" onClick={handleNavigation}>
              <i className="fas fa-user-circle" />
              <p>Account</p>
              <i
                className="fas fa-chevron-down dashboard__icon--arow"
                style={style}
              />
            </li>
            <ul className="dashboard__sub-list" style={subList}>
              <li>Edit Account</li>
              <li>Delete Account</li>
            </ul>
          </ul>
        </div>
        <div className="dashboard__content-side">content</div>
      </div>
    </div>
  );
};

export default Dashboard;

// http://www.theme-guys.com/materialism/angular/#/forms/validation
