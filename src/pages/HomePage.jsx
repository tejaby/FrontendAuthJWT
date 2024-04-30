// Importación de libraries
import React from "react";

// Importación de Context
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { user } = useAuth();

  return <div>welcome {user["nombre de usuario"]}</div>;
}

export default HomePage;
