// Importación de bibliotecas externas
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

// Importación de services
import { loginService } from "../services/UserServices";

// Importación de Context
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { setUser, setToken } = useAuth();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    loginService(data)
      .then((response) => {
        setUser(response.user);
        setToken(response.token);
        navigate('/')
      })
      .catch((err) => {
        setError(err.data);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue="yostintejaby"
        {...register("username", { required: true })}
      />
      {errors.username && <span>username is required</span>}

      <input type="password" {...register("password", { required: true })} />

      {errors.password && <span>password is required</span>}

      <input type="submit" />
    </form>
  );
}

export default LoginPage;
