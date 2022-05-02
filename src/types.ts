export type AuthResponseType = {
  success: boolean;
  status: number;
  message: string;
  token: string;
  token_type: string;
};

export type AuthStoreType = {
  isAuth: boolean;
  token: string;
  signup: (formData: RegisterFormType) => Promise<void>;
  signin: (formData: RegisterFormType) => Promise<void>;
};

export type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};
