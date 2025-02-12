import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../../core/services/common/storage.services";
const PrivateRoute1 = ({ children }) => {
  const token = getItem("token")
  if (token) {
    return <Navigate to="/" />;
  } 
  return children
};

export default PrivateRoute1;