// Importación de libraries
import { Routes, Route } from "react-router-dom";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Importación de archivos de Utils
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { PublicRoutes } from "./utils/PublicRoutes";

// Importación de Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import { Navbar } from "./components/Navbar";

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
      </Routes>
      <ToastContainer />  
    </>
  );
}

export default App;
