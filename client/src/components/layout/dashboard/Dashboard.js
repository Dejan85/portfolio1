import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import EditAccount from "./account/EditAccount";
import DeleteAccount from "./account/DeleteAccount";
import AddProject from "./projects/AddProject";
import EditProject from "./projects/EditProject";
import DeleteProject from "./projects/DeleteProject";
import DashboardNav from "./DashboardNav";

// custom hooks
import { useInfoHook } from "./hooks/infoHook";

const Dashboard = () => {
  const [subMenu, setSubMenu] = useState();
  const [page] = useState({
    edit: "editaccount",
    del: "deleteaccount",
    addPro: "addproject",
    editPro: "editproject",
    delPro: "deleteproject"
  });

  const handleSubNav = e => {
    const target = e.target.getAttribute("data-acc");
    setSubMenu(target.replace(/\s/g, "").toLowerCase());
  };

  const info = useInfoHook(
    subMenu,
    page.edit,
    page.del,
    page.addPro,
    page.editPro,
    page.delPro
  );

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="dashboard__logo">
          <Link className="dashboard__logo" to="/">
            Devxad
          </Link>
        </div>
        <div className="dashboard__header-nav">Header nav</div>
      </div>
      <div className="dashboard__content">
        <div className="dashboard__nav">
          <DashboardNav
            name={"Account"}
            handleSubNav={handleSubNav}
            liName={["Edit Account", " Delete Account"]}
            height={"6rem"}
          />

          <DashboardNav
            name={"Projects"}
            handleSubNav={handleSubNav}
            liName={["Add Project", "Edit Project", " Delete Project"]}
            height={"9rem"}
          />
        </div>

        <div className="dashboard__content-side">
          <div className="dashboard__info">
            {info.i}
            {info.h1}
            <p className="dashboard__p">{info.p}</p>
          </div>
          <div className="dashboard__content">
            {subMenu === page.edit && (
              <EditAccount formHeight={{ height: "40rem" }} />
            )}
            {subMenu === page.del && <DeleteAccount />}
            {subMenu === page.addPro && (
              <AddProject formHeight={{ height: "95rem" }} />
            )}
            {subMenu === page.editPro && <EditProject />}
            {subMenu === page.delPro && <DeleteProject />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// http://www.theme-guys.com/materialism/angular/#/forms/validation
