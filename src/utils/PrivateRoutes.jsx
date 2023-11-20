// Importación de libraries
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Importación de Context
import { useAuth } from "../context/AuthContext";

export const PrivateRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
