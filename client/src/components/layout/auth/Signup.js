import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");

  const handlechange = e => {
    // setInput(console.log(input));
    // console.log(e.target.name);
    // console.log(e.target.value);
  };

  return (
    <div className="login">
      <div className="login__content">
        <h1 className="login__h1">Registracija</h1>
        <form className="login__form">
          <div className="login__input-holder">
            <label className="login__label">Name:</label>
            <input
              className="login__input"
              onChange={e => {
                setName(e.target.value);
              }}
              value={name}
              name="name"
            />
          </div>
          {/* <div className="login__input-holder">
            <label className="login__label">Email:</label>
            <input
              className="login__input"
              type="email"
              onChange={handlechange}
              value={input.email}
              name="email"
            />
          </div>

          <div className="login__input-holder">
            <label className="login__label">Password:</label>
            <input
              className="login__input"
              type="password"
              onChange={handlechange}
              value={input.password}
              name="password"
            />
          </div>

          <div className="login__input-holder">
            <label className="login__label">Confirm Password:</label>
            <input
              className="login__input"
              type="password"
              onChange={handlechange}
              value={input.confirmPassword}
              name="confirmPassword"
            />
          </div> */}

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
