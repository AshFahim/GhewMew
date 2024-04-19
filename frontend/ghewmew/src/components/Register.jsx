import React from "react";
//import { UserContext } from "../context/UserContext";
import ErrorMessage from "./ErrorMessage";
import Cookies from "js-cookie";

const Register = () => {
  const [name, setName] = React.useState(""); // [state, setState]
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  //const { setToken } = React.useContext(UserContext);

  const SubmitRegistration = async () => {
    setError(null); // Reset error
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else if (password.length < 4) {
      // corrected the password length check
      setError("Password must be at least 4 characters long");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    };

    try {
      const response = await fetch(
        "http://localhost:3700/register/user",
        requestOptions
      );

      const data = await response.json();

      if (data.status === "error") {
        setError(data.message);
      } else if (data.status === true) {
        console.log(data);
        //set cookie

        Cookies.set("UserToken", data.token);
        Cookies.set("UserEmail", email);
        //setToken(data.token);
        localStorage.setItem("UserToken", data.token);
        localStorage.setItem("UserEmail", email);
      }
    } catch (error) {
      // Handle network errors or other issues with the request
      setError("An error occurred while processing your request");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SubmitRegistration();
  };

  return (
    <div className="columns is-centered">
      <br />
      <br />
      <form className="box" onSubmit={handleSubmit}>
        <h1 className="title">Register User</h1>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">E-mail</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        {error && <ErrorMessage error={error} />}{" "}
        {/* corrected setError to error */}
        <br />
        <button className="button is-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
