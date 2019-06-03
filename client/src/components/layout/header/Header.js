import React, { useState, useEffect, useRef } from "react";

// components
import Logo from "./Logo";
import Nav from "./Nav";
import NavRightSide from "./NavRightSide";
import DropMenu from "./DropMenu";

//custom hooks
import { useNavHook } from "./hooks/NavHook";

const Header = () => {
  const headerRef = useRef();
  const [active, setActive] = useState(false);
  const style = useNavHook(headerRef);

  // const activeHook = useActiveHook(active);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setActive(false);
    });
  }, []);

  const handleDropMenu = () => {
    return setActive(!active);
  };

  return (
    <>
      <header className="header" ref={headerRef} style={style.header}>
        {active ? <DropMenu /> : null}
        <div className="header__left" style={style.leftSide}>
          <Logo style={style.logo} />
          <Nav xad={active} />
          <div id="nav-toggle" className={active ? "active" : ""}>
            <span onClick={handleDropMenu} />
          </div>
        </div>
        <div className="header__right" style={style.rightSide}>
          <NavRightSide />
        </div>
      </header>
    </>
  );
};

export default Header;
