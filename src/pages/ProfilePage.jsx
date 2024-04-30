// Importación de libraries
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Importación de services
import { listNotesService } from "../services/UserServices";

// Importación de Context
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { token } = useAuth();
  const [note, setNote] = useState([]);

  useEffect(() => {
    if (token && token.access) {
      listNotesService(token.access)
        .then((response) => {
          setNote(response);
        })
        .catch((err) => {
          toast.error(err.data.detail, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            pauseOnFocusLoss: false,
            pauseOnHover: false,
          });
        });
    }
  }, [token]);

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
