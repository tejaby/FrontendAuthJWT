import { createContext, useContext, useState, useEffect } from "react";

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
          localStorage.setItem("authTokens", JSON.stringify(response));
        })
        .catch((err) => {
          console.log(err)
          setUser(null);
          setToken(null);
          localStorage.removeItem("user");
          localStorage.removeItem("authTokens");
        });
    }
  }, [token]);

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
