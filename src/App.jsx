// Importación de libraries
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Importación de components
import { Navbar } from "./components/Navbar";

// Importación de archivos de Utils
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { PublicRoutes } from "./utils/PublicRoutes";

// Importación de Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />

        <Route element={<PrivateRoutes />}>
          <Route path="/" Component={HomePage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/profile" Component={ProfilePage} />
        </Route>
        <Route path="/dashboard" Component={DashboardPage} />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
