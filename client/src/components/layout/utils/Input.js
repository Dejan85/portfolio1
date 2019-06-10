import React from "react";
import PropTypes from "prop-types";

const Input = ({ text }) => {
  return (
    <div className="form__input-holder">
      <label className="form__label">{text}</label>
      <input className="form__input" />
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string,
};

export default Input;
