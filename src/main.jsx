// Importación de bibliotecas externas
import React from "react";
import ReactDOM from "react-dom/client";

// Importación de componentes
import App from "./App.jsx";

// Importación de Provider
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
