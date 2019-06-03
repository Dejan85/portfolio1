import React from "react";
import PropTypes from "prop-types";

const Logo = ({ style }) => {
  return (
    <div className="header__logo" style={style}>
      Devxad
    </div>
  );
};

Logo.propTypes = {
  style: PropTypes.object
};

export default Logo;
