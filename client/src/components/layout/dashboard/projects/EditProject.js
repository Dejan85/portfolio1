import React from "react";

// components
import Input from "../../utils/Input";
import TextArea from "../../utils/TextArea";
import Select from "../../utils/Select";

const EditProject = ({ formHeight }) => {
  return (
    <div className="form" style={formHeight}>
      <form className="form__container">
        <Input text={"Name"} />
        <Input text={"Title"} />
        <Input text={"Image"} />
        <Select text={"Type"} />
        <TextArea text={"Description"} />
        <div className="form__button-holder">
          <button className="form__button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
