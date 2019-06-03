import React, { useState, useEffect, useRef } from "react";

// components
import Logo from "./Logo";
import Nav from "./Nav";
import NavRightSide from "./NavRightSide";

const Header = () => {
  const [active, setActive] = useState(false);
  const [style, setStyle] = useState({});
  const headerRef = useRef();

  const handleDropMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setStyle(() => {
        return window.pageYOffset > headerRef.current.offsetTop
          ? {
              header: {
                position: "fixed",
                paddingTop: "0rem"
              },
              leftSide: {
                background: "#29b6f6"
              },
              rightSide: {
                background: "#212121"
              },
              logo: {
                color: "#212121",
                fontSize: "1.6rem"
              }
            }
          : {};
      });
    });
  }, []);

  return (
    <header className="header" ref={headerRef} style={style.header}>
      <div className="header__left" style={style.leftSide}>
        <Logo style={style.logo} />
        <Nav />
      </div>
      <div className="header__right" style={style.rightSide}>
        <NavRightSide />
      </div>
    </header>
  );
};

export default Header;
