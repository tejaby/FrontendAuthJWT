// Importación de bibliotecas externas
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";

// Importación de Context
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    login();
    navigate("/");
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
