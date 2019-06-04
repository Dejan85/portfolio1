import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login">
      <div className="login__content">
        <h1 className="login__h1">Registracija</h1>
        <form className="login__form">
          <div className="login__input-holder">
            <label className="login__label">Name:</label>
            <input className="login__input" />
          </div>
          <div className="login__input-holder">
            <label className="login__label">Email:</label>
            <input className="login__input" type="email" />
          </div>

          <div className="login__input-holder">
            <label className="login__label">Password:</label>
            <input className="login__input" type="password" />
          </div>

          <div className="login__input-holder">
            <label className="login__label">Confirm Password:</label>
            <input className="login__input" type="password" />
          </div>

          <div className="login__button-holder">
            <button className="login__button">Registruj se</button>
            <Link className="login__button-register" to="/login">
              Nazad
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
