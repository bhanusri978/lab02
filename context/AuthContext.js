import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  // Store user data in this usestate

  // Defining the signIn function
  const signIn = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUser({ username }); 
    }
  };

  // Define the logout function
  const logout = () => {
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


