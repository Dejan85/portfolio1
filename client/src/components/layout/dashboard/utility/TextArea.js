import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextArea = ({ text }) => {
  const [textarea, setTextarea] = useState();

  const handleChange = e => {
    setTextarea(e.target.value);
  };

  return (
    <div className="form__input-holder">
      <label className="form__label">{text}</label>
      <ReactQuill style={{ marginTop: "3rem", height: "40rem" }} />
    </div>
  );
};

export default TextArea;
