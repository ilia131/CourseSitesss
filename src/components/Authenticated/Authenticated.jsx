import React, { createContext, useState, useEffect, useContext } from "react";
import { getItem } from "../../core/services/common/storage.services";
import { setItem } from "../../core/services/common/storage.services";
import { removeItem } from "../../core/services/common/storage.services";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  const login = (token) => {
    setItem("token", token);
    setAuthenticated(true);
  };

  const logout = () => {
    removeItem("token");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout , setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
