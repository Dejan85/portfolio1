import React from "react";

// components
import Input from "../utility/Input";
import TextArea from "../utility/TextArea";
import Select from "../utility/Select";

const AddProject = ({ formHeight }) => {
  return (
    <div className="form" style={formHeight}>
      <form className="form__container">
        <Input text={"Name"} />
        <Input text={"Title"} />
        <Input text={"Image"} />
        <Select text={"Type"} />
        <TextArea text={"Description"} />
      </form>
    </div>
  );
};

export default AddProject;
