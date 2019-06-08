import React from "react";

// image
import avatar from "../../../sass/images/avatar.jpg";

const DeleteAccount = () => {
  return (
    <div className="delete-account">
      <img className="delete-account__avatar" src={avatar} alt="slika" />
      <div className="delete-account__user">
        <p className="delete-account__name">Xypnotica@gmail.com</p>
        <p className="delete-account__message">
          Ako stvarno obrises account vise neces moci da ga vratis i trajno ces
          ga izgubiti. Da li zaista zelis da obrises account?
        </p>
        <button className="delete-account__button">Delete</button>
      </div>
    </div>
  );
};

export default DeleteAccount;
