import React, { useState, useEffect, useRef } from "react";

// components
import Logo from "./Logo";
import Nav from "./Nav";
import NavRightSide from "./NavRightSide";
import DropMenu from "../home/DropMenu";

const Header = () => {
  const [active, setActive] = useState(false);
  const [style, setStyle] = useState({});
  const headerRef = useRef();

  const handleDropMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screen.availWidth > 980) {
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
                  color: "#212121"
                  // fontSize: "1.6rem"
                }
              }
            : {};
        });
      } else {
        setStyle(() => {
          return window.pageYOffset > headerRef.current.offsetTop
            ? {
                header: {
                  position: "fixed",
                  paddingTop: "0rem",
                  width: "100%"
                },
                leftSide: {
                  background: "#29b6f6"
                },
                rightSide: {
                  display: "none"
                },
                logo: {
                  // color: "#212121",
                  fontSize: "2.4rem"
                }
              }
            : {};
        });
      }
    });
  }, []);

  return (
    <>
      <header className="header" ref={headerRef} style={style.header}>
        {active ? <DropMenu /> : null}
        <div className="header__left" style={style.leftSide}>
          <Logo style={style.logo} />
          <Nav />
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
