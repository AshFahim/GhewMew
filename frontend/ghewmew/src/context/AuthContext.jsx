import React, { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';

// Create a new context for JWT token
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap your application and manage authentication state
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Function to handle login
  const login = (newToken) => {
    // Set the token in both state and cookie
    setToken(newToken);
    Cookies.set('jwt_token', newToken);
  };

  // Function to handle logout
  const logout = () => {
    // Remove the token from both state and cookie
    setToken(null);
    Cookies.remove('jwt_token');
  };

  useEffect(() => {
    // Check if there's a token stored in cookies on component mount
    const storedToken = Cookies.get('jwt_token');
    if (storedToken) {
      // If token exists, set it in state
      setToken(storedToken);
    }
  }, []);

  // Value object for the context provider
  const value = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;