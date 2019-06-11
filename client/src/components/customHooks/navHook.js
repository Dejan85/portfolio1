import { useState, useEffect } from "react";

export const useNavHook = headerRef => {
  const [style, setStyle] = useState({});

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
                  color: "#212121",
                  fontSize: "2.4rem"
                }
              }
            : {};
        });
      }
    });
  }, [headerRef]);

  return style;
};
