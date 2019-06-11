import React, { useState, useEffect } from "react";

export const useErrorHandle = form => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (form) {
      const name = form && form.name === "" ? <p className="validation__error">Name field is required</p> : undefined;
      const email = form && form.email === "" ? <p className="validation__error">Email field is required</p> : undefined;
      const password = form && form.password === "" ? <p className="validation__error">Password field is required</p> : undefined;
      const confirmPassword = form && form.confirmPassword === "" ? <p className="validation__error">Confirm password field is required</p> : undefined;
      const passwordMatch = form && form.password !== form.confirmPassword ? <p className="validation__error">Password does not metch</p> : undefined;
      setError({ name, email, password, confirmPassword, passwordMatch })
    }
  }, [form])

  return error;
}




