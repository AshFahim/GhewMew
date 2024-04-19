import React from "react";
import ErrorMessage from "./ErrorMessage";
import Cookies from "js-cookie";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = async (e) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        };

        try {
            const response = await fetch(
                "http://127.0.0.1:3700/login/user",
                requestOptions
            );
            const data = await response.json();
            console.log(data);
            if (data.status === false) {
                setError(data.message);
            } else if (data.status === true) {
                console.log(data);
                // set cookie
                Cookies.set("UserToken", null);
                Cookies.set("UserEmail", null);
                Cookies.set("UserToken", data.token);
                Cookies.set("UserEmail", email);
                // setToken(data.token);
                localStorage.setItem("UserToken", data.token);
                localStorage.setItem("UserEmail", email);
            }
        } catch (error) {
            setError("An error occurred while processing your request");
        }
    }


    return(
        <div className="columns is-centered">
          <br />
          <br />
          <form className="box" onSubmit={handleSubmit}>
            <h1 className="title">Login User</h1>
            
            <div className="field">
              <label className="label">Email Address</label>
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
            {error && <ErrorMessage error={error} />}{" "}
            {/* corrected setError to error */}
            <br />
            <button className="button is-primary" type="submit">
              Login
            </button>
          </form>
        </div>
      );
};

export default Login;
