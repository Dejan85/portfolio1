import React, { useState, useEffect } from "react";

export const useInfoHook = (subMenu, edit, del) => {
  const [info, setInfo] = useState({
    i: <i className="fas fa-tachometer-alt dashboard__icon" />,
    h1: "Dashboard",
    p: "This is dashboard"
  });

  useEffect(() => {
    if (subMenu === edit) {
      setInfo({
        i: <i className="fas fa-user-edit dashboard__icon" />,
        h1: "Edit Account",
        p: "Now you can edit your account."
      });
    } else if (subMenu === del) {
      setInfo({
        i: <i className="fas fa-user-slash dashboard__icon" />,
        h1: "Delete Account",
        p: "Are you sure you wanna delete account?"
      });
    }
  }, [subMenu, edit, del]);

  return info;
};
