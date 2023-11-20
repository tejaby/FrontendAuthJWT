// Importación de libraries
import React from "react";
import { Navigate } from "react-router-dom";

// Importación de Context
import { useAuth } from "../context/AuthContext";

export const PublicRoutes = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};
