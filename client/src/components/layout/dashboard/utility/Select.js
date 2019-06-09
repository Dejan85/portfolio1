import React from "react";

const Select = ({ text }) => {
  return (
    <div className="form__input-holder">
      <label className="form__label">{text}</label>
      <select className="dashboard__select" name="type" form="type">
        <option className="dashboard__option" value="html/css">
          Html/Css
        </option>
        <option className="dashboard__option" value="javascript">
          Javascript
        </option>
        <option className="dashboard__option" value="ract">
          React Js
        </option>
        <option className="dashboard__option" value="node">
          Node Js
        </option>
      </select>
    </div>
  );
};

export default Select;
