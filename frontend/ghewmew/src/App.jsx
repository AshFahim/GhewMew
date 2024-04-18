import React, { useEffect, useState } from "react";

import Register from "./components/Register";

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
    <div>
      <h1>{message}</h1>
      <Register />
    </div>
  );
};

export default App;
