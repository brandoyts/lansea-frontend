import React from "react";
import AuthWrapper from "../../components/AuthWrapper";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/FormGroup";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../schemas/registerSchema";
import Link from "next/link";

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <AuthWrapper>
      <div className="p-5 bg-indigo-500 shadow-xl rounded-md ">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <FormGroup>
            <p className="text-red-200 animate-pulse animation">
              {errors.firstName?.message}
            </p>
            <label className="text-white">First Name:</label>
            <input
              autoComplete="off"
              type="text"
              className="outline-none p-2 rounded-lg w-full"
              {...register("firstName")}
            />
          </FormGroup>
          <FormGroup>
            <p className="text-red-200 animate-pulse animation">
              {errors.lastName?.message}
            </p>
            <label className="text-white">Last Name:</label>
            <input
              autoComplete="off"
              type="text"
              className="outline-none p-2 rounded-lg w-full"
              {...register("lastName")}
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
