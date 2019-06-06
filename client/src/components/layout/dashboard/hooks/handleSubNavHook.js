import React, { useState, useRef } from "react";

//components
import EditAccount from "../EditAccount";
import DeleteAccount from "../DeleteAccount";

export const useHadnleSubNav = e => {
  const [subMenu, setSubMenu] = useState();
  const editAcc = useRef("editaccount");
  const delAcc = useRef("deleteaccount");

  const target = e.target.getAttribute("data-acc");
  setSubMenu(target.replace(/\s/g, "").toLowerCase());

  return (
    (subMenu === editAcc.current && <EditAccount />) ||
    (subMenu === delAcc.current && <DeleteAccount />)
  );
};
