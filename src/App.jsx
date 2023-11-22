// Importación de libraries
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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

// Importación de services
import { refreshService } from "./services/UserServices";

// Importación de Context
import { useAuth } from "./context/AuthContext";

function App() {
  const { setUser, token, setToken } = useAuth();

  const [checkedToken, setCheckedToken] = useState(false);

  useEffect(() => {
    if (token && !checkedToken) {
      console.log("updated");
      refreshService({ refresh: token.refresh })
        .then((response) => {
          setToken(response);
          localStorage.setItem("authTokens", JSON.stringify(response));
        })
        .catch((err) => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("user");
          localStorage.removeItem("authTokens");
          toast.error(err.data.detail, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            pauseOnFocusLoss: false,
            pauseOnHover: false,
          });
        })
        .finally(() => {
          setCheckedToken(true);
        });
    }
  }, [token, checkedToken]);

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
