import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "./AuthContext";

// A form that allows users to register for an account

export default function Register() {
  // The Register Function
  const { register } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const tryRegister = async (formData) => {
    setError(null);

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await register({ firstname, lastname, email, password });
      navigate("/books");
    } catch (e) {
      setError(e.message);
    }
  };

  // The Register form
  return (
    <>
      <p className="registerPanel">
        <h1>Register for an account</h1>
        <form action={tryRegister}>
          <label>
            First Name
            <input type="text" name="firstname" />
          </label>
          <label>
            Last Name
            <input type="text" name="lastname" />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Password
            <input type="password" name="password" required />
          </label>
          <button>Register</button>
          {error && <p role="alert">{error}</p>}
        </form>
        <Link to="/login">Already have an account? Log in here.</Link>
      </p>
    </>
  );
}
