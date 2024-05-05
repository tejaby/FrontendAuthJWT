// Importación de libraries
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Importación de services
import { listNotesService, refreshService } from "../services/UserServices";

// Importación de Context
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { setUser, token, setToken } = useAuth();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await listNotesService(token.access);
        setNotes(response);
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
    };
    if (token && token.access) {
      fetchNotes();
    }
  }, [token]);

  return (
    <div>
      <h2>notes</h2>
      {notes.map((note) => (
        <ul key={note.id}>
          <li>{note.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default ProfilePage;
