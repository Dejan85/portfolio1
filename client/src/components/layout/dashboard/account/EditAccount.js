import React from "react";

// components
import Input from "../../utils/Input";

const EditAccount = ({ formHeight }) => {
  return (
    <div className="form" style={formHeight}>
      <form className="form__container">
        <Input text={"Name"} />
        <Input text={"Email"} />
        <Input text={"Password"} />
        <Input text={"Avatar"} />
        <div className="form__button-holder">
          <button className="form__button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
