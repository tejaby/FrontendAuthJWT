// Importación de bibliotecas externas
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

// Importación de libraries
import { refreshService } from "../services/UserServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null;
  });

  useEffect(() => {
    if (token) {
      refreshService({ refresh: token.refresh })
        .then((response) => {
          setToken(response);
          localStorage.setItem("authTokens", JSON.stringify(response));
        })
        .catch((err) => {
          toast.error(err.data.detail, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            pauseOnFocusLoss: false,
            pauseOnHover: false,
          });
          setUser(null);
          setToken(null);
          localStorage.removeItem("user");
          localStorage.removeItem("authTokens");
        });
    }
  }, [setToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
