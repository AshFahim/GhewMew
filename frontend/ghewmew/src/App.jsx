import React, { useEffect, useState } from "react";

import Register from "./components/Register";
import Login from "./components/login";

const App = () => {
  const [message, setMessage] = useState("");

  const getWelcomeMsg = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("http://localhost:3700/api", requestOptions);
      const data = await response.json();
      setMessage(data.message); // Assuming your API response has a "message" property
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getWelcomeMsg();
  }, []);

  return (
    <>
      <h1>Welcome to the App</h1>
      <p>{message}</p>
      <div className="columns">
        <div className="column"></div>
        <div className="column m-5 is-two-thirds">
            <div className="columns">
              <Register /> <Login />
            </div>
            <div className="columns">
              
            </div>
        </div>
        <div className="column"></div>
      </div>
      
    </>
  );
};

export default App;
