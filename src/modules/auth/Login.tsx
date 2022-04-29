import React from "react";
import AuthWrapper from "../../components/AuthWrapper";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/FormGroup";
import Link from "next/link";

type FormType = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <AuthWrapper>
      <div className="p-5 bg-indigo-500 shadow-xl rounded-md ">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <FormGroup>
            <p className="text-red-200 animate-pulse animation">
              {errors.email?.message}
            </p>
            <label className="text-white">Email:</label>
            <input
              autoComplete="off"
              type="text"
              className="outline-none p-2 rounded-lg w-full"
              {...register("email")}
            />
          </FormGroup>
          <FormGroup>
            <p className="text-red-200 animate-pulse animation">
              {errors.password?.message}
            </p>
            <label className="text-white">Password:</label>
            <input
              autoComplete="off"
              type="password"
              className="outline-none p-2 rounded-lg w-full"
              {...register("password")}
            />
          </FormGroup>

          <button
            type="submit"
            className="mt-5 bg-yellow-300 p-2 text-md rounded-xl"
          >
            Login
          </button>

          <p className="text-sm mt-2 text-white">
            {"Don't have an account yet? "}
            <Link passHref href="/register">
              <a className="text-yellow-300">Register Here</a>
            </Link>
          </p>
        </form>
      </div>
    </AuthWrapper>
  );
};
export default Login;
