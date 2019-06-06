import React, { useState, useRef } from "react";

//components
import EditAccount from "./EditAccount";
import DeleteAccount from "./DeleteAccount";

const Dashboard = () => {
  const [dropMenu, setDropMenu] = useState(true);
  const [subList, setSubList] = useState();
  const [style, setStayle] = useState({});
  const [subMenu, setSubMenu] = useState();
  const editAcc = useRef("editaccount");
  const delAcc = useRef("deleteaccount");

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
        height: "7.7rem"
      });
    } else {
      setStayle({
        transform: "rotate(0deg)",
        transition: "all 0.5s"
      });

      setSubList({
        height: "0px"
      });
    }
  };

  const handleSubNav = e => {
    const target = e.target.getAttribute("data-acc");
    setSubMenu(target.replace(/\s/g, "").toLowerCase());
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
            <div className="dashboard__sub-list" style={subList}>
              <li data-acc="editaccount" onClick={handleSubNav}>
                Edit Account
              </li>
              <li data-acc="deleteaccount" onClick={handleSubNav}>
                Delete Account
              </li>
            </div>
          </ul>
        </div>
        <div className="dashboard__content-side">
          {subMenu === editAcc.current && <EditAccount />}
          {subMenu === delAcc.current && <DeleteAccount />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// http://www.theme-guys.com/materialism/angular/#/forms/validation
