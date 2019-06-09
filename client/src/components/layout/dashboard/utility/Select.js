import React from "react";

const Select = ({ text }) => {
  return (
    <div className="form__input-holder">
      <label className="form__label">{text}</label>
      <select
        style={{ marginTop: "3rem", padding: "1rem" }}
        name="carlist"
        form="carform">
        <option value="html/css">Html/Css</option>
        <option value="javascript">Javascript</option>
        <option value="ract">React Js</option>
        <option value="node">Node Js</option>
      </select>
    </div>
  );
};

export default Select;
