import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// hooks
import { useErrorHandle } from "../../customHooks/errorHandleHook";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [form, setForm] = useState();

  const error = useErrorHandle(form);


  const submit = e => {
    e.preventDefault();
    setForm(input);

    if (error && !error.name && !error.email && !error.password && !error.confirmPassword && !error.passwordMatch) {
      console.log(error);
    }


  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    // setForm({})
  }

  return (
    <div className="login">
      <div className="login__content">
        <h1 className="login__h1">Registracija</h1>
        <form className="login__form" onSubmit={submit}>
          <div className="login__input-holder">
            <label className="login__label">Name:</label>
            <input
              className="login__input"
              value={input.name}
              name="name"
              onChange={handleChange}
            />
            {error.name}

          </div>
          <div className="login__input-holder">
            <label className="login__label">Email:</label>
            <input
              className="login__input"
              type="email"
              value={input.email}
              name="email"
              onChange={handleChange}
            />
            {error.email}
          </div>

          <div className="login__input-holder">
            <label className="login__label">Password:</label>
            <input
              className="login__input"
              type="password"
              value={input.password}
              name="password"
              onChange={handleChange}
            />
            {error.password}

          </div>

          <div className="login__input-holder">
            <label className="login__label">Confirm Password:</label>
            <input
              className="login__input"
              type="password"
              value={input.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
            {error.confirmPassword}
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
