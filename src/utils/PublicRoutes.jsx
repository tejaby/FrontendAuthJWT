// Importación de libraries
import { Navigate } from "react-router-dom";
import React from "react";

// Importación de Context
import { useAuth } from "../context/AuthContext";

export const PublicRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};
