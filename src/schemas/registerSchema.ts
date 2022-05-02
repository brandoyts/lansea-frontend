import * as yup from "yup";

const registerSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email address").required(),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters."),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export default registerSchema;
