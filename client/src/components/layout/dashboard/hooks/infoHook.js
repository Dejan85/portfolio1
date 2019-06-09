import React, { useState, useEffect } from "react";

export const useInfoHook = (subMenu, edit, del, addPro, editPro, delPro) => {
  const [info, setInfo] = useState({
    i: <i className="fas fa-tachometer-alt dashboard__icon" />,
    h1: <h1 className="dashboard__h1">Dashboard</h1>,
    p: "This is dashboard"
  });

  useEffect(() => {
    if (subMenu === edit) {
      setInfo({
        i: <i className="fas fa-user-edit dashboard__icon" />,
        h1: <h1 className="dashboard__h1">Edit Account</h1>,
        p: "Now you can edit your account."
      });
    } else if (subMenu === del) {
      setInfo({
        i: <i className="fas fa-user-slash dashboard__icon delete--h1" />,
        h1: <h1 className="dashboard__h1 delete--h1">Delete Account</h1>,
        p: "Are you sure you wanna delete account?"
      });
    } else if (subMenu === addPro) {
      setInfo({
        i: <i className="fas fa-plus dashboard__icon" />,
        h1: <h1 className="dashboard__h1">Add Project</h1>,
        p: "Add your project."
      });
    } else if (subMenu === editPro) {
      setInfo({
        i: <i className="fas fa-edit dashboard__icon" />,
        h1: <h1 className="dashboard__h1">Edit Project</h1>,
        p: "Edit your project."
      });
    } else if (subMenu === delPro) {
      setInfo({
        i: <i className="fas fa-user-slash dashboard__icon delete--h1" />,
        h1: <h1 className="dashboard__h1 delete--h1">Delete Project</h1>,
        p: "Are you sure you wanna delete project?"
      });
    }
  }, [subMenu, edit, del, addPro, editPro, delPro]);

  return info;
};
