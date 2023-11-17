// Importación de bibliotecas externas
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

// Importación de services
import { loginService } from "../services/UserServices";

// Importación de Context
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { setUser, setToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    loginService(data)
      .then((response) => {
        toast.success(response.message, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 3000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
        setTimeout(() => {
          setUser(response.user);
          setToken(response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("authTokens", JSON.stringify(response.token));
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.data.errors, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 3000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
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
