// Importación de libraries
import React from "react";
import { Navigate } from "react-router-dom";

// Importación de Context
import { useAuth } from "../context/AuthContext";

function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>DashboardPage</div>;
}

export default DashboardPage;
