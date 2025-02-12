import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../../core/services/common/storage.services";
const PrivateRoute = () => {
  const token = getItem("token")
  if (!token) {
    return <Navigate to="/login" />;
  } 
  return <Outlet />
};

export default PrivateRoute;