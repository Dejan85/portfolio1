import React from "react";

const EditAccount = () => {
  return (
    <div className="edit-account">
      <form className="edit-account__form">
        <div className="edit-account__input-holder">
          <label className="edit-account__label">Name</label>
          <input className="edit-account__input" />
        </div>
        <div className="edit-account__input-holder">
          <label className="edit-account__label">Email</label>
          <input className="edit-account__input" />
        </div>
        <div className="edit-account__input-holder">
          <label className="edit-account__label">Password</label>
          <input className="edit-account__input" />
        </div>
        <div className="edit-account__input-holder">
          <label className="edit-account__label">Avatar</label>
          <input className="edit-account__input" />
        </div>
        <div className="edit-account__button-holder">
          <button className="edit-account__button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
