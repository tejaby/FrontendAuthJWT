// Importación de libraries
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Importación de services
import { listNotesService, refreshService } from "../services/UserServices";

// Importación de Context
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { setUser, token, setToken } = useAuth();
  const [note, setNote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listNotesService(token.access);
        setNote(response);
      } catch (err) {
        if (err.status === 401 && err.data.code === "token_not_valid") {
          try {
            const response = await refreshService({ refresh: token.refresh });
            setToken(response);
            localStorage.setItem("authTokens", JSON.stringify(response));
          } catch (err) {
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
          }
        }
      }
    };

    if (token && token.access) {
      fetchData();
    }
  }, [token, setToken]);

  return (
    <div>
      <h2>notes</h2>
      {note.map((note) => (
        <ul key={note.id}>
          <li>{note.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default ProfilePage;
