import React from "react";
import AuthWrapper from "../../components/AuthWrapper";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/FormGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../schemas/registerSchema";
import Link from "next/link";
import { useRouter } from "next/router";
import authStore from "../../store/authStore";

import { RegisterFormType } from "../../types";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: yupResolver(registerSchema),
  });

  const router = useRouter();

  const isAuth = authStore((state) => state.isAuth);
  const signin = authStore((state) => state.signup);

  const onSubmit = handleSubmit(async (formData) => {
    await signin(formData);
  });

  if (isAuth) {
    router.push("/listing");
  }

  console.log(isAuth);
  return (
    <AuthWrapper>
      <div className="p-5 bg-indigo-500 shadow-xl rounded-md ">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <FormGroup>
            <p className="text-red-200 animate-pulse animation">
              {errors.name?.message}
            </p>
            <label className="text-white">Name:</label>
            <input
              autoComplete="off"
              type="text"
              className="outline-none p-2 rounded-lg w-full"
              {...register("name")}
            />
          </FormGroup>
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
          <FormGroup>
            <p className="text-red-200 animate-pulse animation">
              {errors.passwordConfirmation?.message}
            </p>
            <label className="text-white">Confirm Password:</label>
            <input
              autoComplete="off"
              type="password"
              className="outline-none p-2 rounded-lg w-full"
              {...register("passwordConfirmation")}
            />
          </FormGroup>
          <button
            type="submit"
            className="mt-5 bg-yellow-300 p-2 text-md rounded-xl"
          >
            Register
          </button>

          <p className="text-sm mt-2 text-white">
            Already have an account?{" "}
            <Link passHref href="/login">
              <a className="text-yellow-300">Login Here</a>
            </Link>
          </p>
        </form>
      </div>
    </AuthWrapper>
  );
};
export default Register;
