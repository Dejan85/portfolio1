import { useState, useEffect } from "react";

export const useErrorHandle = form => {

  const [error, setError] = useState({});

  useEffect(() => {
    if (form) {
      const name = form && form.name === "" ? "Name field is required" : null;
      const email = form && form.email === "" ? "Email field is required" : null;
      const password = form && form.password === "" ? "Password field is required" : null;
      const confirmPassword = form && form.confirmPassword === "" ? "Confirm password field is required" : null;
      const passwordMatch = !confirmPassword && form && form.password === form.confirmPassword ? "Password does not metch" : null;
      setError({ name, email, password, confirmPassword, passwordMatch })
    }
  }, [form])

  return error;
}