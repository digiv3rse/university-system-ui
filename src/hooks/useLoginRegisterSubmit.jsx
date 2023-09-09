"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const useLoginRegisterSubmit = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // on submit register
  const onSubmitRegister = async (data) => {
    try {
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // on submit login
  const onSubmitLogin = async (data) => {
    try {
      console.log(data);
      return router.push("/");
    } catch (error) {
      console.log(err.message);
    }
  };

  // on submit forgot password
  const onForgotPassword = async (data) => {
    try {
      console.log(data);
      return router.push("/");
    } catch (error) {
      console.log(err.message);
    }
  };

  return {
    errors,
    register,
    handleSubmit,
    onForgotPassword,
    onSubmitLogin,
    onSubmitRegister,
  };
};

export default useLoginRegisterSubmit;
