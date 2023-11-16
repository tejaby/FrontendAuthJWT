// Importación de libraries
import { Navigate, Outlet } from "react-router-dom";
import React from "react";

// Importación de Context
import { useAuth } from "../context/AuthContext";

export const PrivateRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet/>;
};
