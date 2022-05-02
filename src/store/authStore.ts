import create from "zustand";
import axios from "../lib/axios";
import { AuthResponseType, AuthStoreType } from "../types";

const authStore = create<AuthStoreType>((set) => ({
  isAuth: false,
  token: "",
  signup: async (formData) => {
    try {
      const { data } = await axios.post<AuthResponseType>(
        "/auth/register",
        formData
      );

      if (data.success) {
        set(() => ({ isAuth: true, token: data.token }));
      }
      console.log(data);
    } catch (error: any) {
      set(() => ({ isAuth: false, token: "" }));
      console.log(error?.response?.data?.errors);
    }
  },
  signin: async (formData) => {
    try {
      const { data } = await axios.post<AuthResponseType>(
        "/auth/login",
        formData
      );

      if (data.success) {
        set(() => ({ isAuth: true, token: data.token }));
      }
      console.log(data);
    } catch (error: any) {
      set(() => ({ isAuth: false, token: "" }));
      console.log(error?.response?.data?.errors);
    }
  },
}));

export default authStore;
