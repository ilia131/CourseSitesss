import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../components/Authenticated/Authenticated";
import { getItem } from "../../core/services/common/storage.services";
const PrivateRoute = () => {
  const { authenticated } = useAuth();
  const token = getItem("token")
  if (!token) {
    return <Navigate to="/login" />;
  } 
  return <Outlet />
};

export default PrivateRoute;