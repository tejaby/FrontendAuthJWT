import React from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="yostintejaby" {...register("username", {required: true})} />
      {errors.username && <span>username is required</span>}

      <input type="password" {...register("password", { required: true })} />

      {errors.password && <span>password is required</span>}

      <input type="submit" />
    </form>
  );
}

export default LoginPage;
