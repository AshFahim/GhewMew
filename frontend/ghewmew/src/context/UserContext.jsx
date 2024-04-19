import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("UserToken"));

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch("http://localhost:3700/tokenreader/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          setToken(null);
          localStorage.removeItem("UserToken");
        }
      } catch (error) {
        console.error("Error validating token:", error);
        // Handle error if request fails
      }
    };

    // Call the validateToken function when token changes
    if (token) {
      validateToken();
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token }}>
      {props.children}
    </UserContext.Provider>
  );
};
