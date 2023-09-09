"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Title from "../Common/Title";
import Link from "next/link";
import useLoginRegisterSubmit from "@/hooks/useLoginRegisterSubmit";

const ForgotPasswordForm = () => {
  const { onForgotPassword, handleSubmit, register, errors } = useLoginRegisterSubmit();

  return (
    <div className="mt-10 lg:mt-0">
      <div className="text-zinc-500 text-[0.94rem] leading-5">
        <p className="text-zinc-500 text-[2.81rem] leading-none mb-3">🤔</p>

        <Title>Forgot Password?</Title>

        <p className="text-[1.17rem] leading-7 my-4">To receive a new password, enter your email address below.</p>

        <form onSubmit={handleSubmit(onForgotPassword)}>
          <div className="mb-6">
            <label className="inline-block mb-2">Email address *</label>

            <div className="w-full items-stretch flex flex-wrap relative">
              <span className="items-center bg-slate-100 rounded-bl-md rounded-tl-md text-zinc-400 flex py-2 px-3 absolute top-1 left-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
                  <path
                    fill="#a3a7ad"
                    d="M85.944 20.189H14.056a2.559 2.559 0 0 0-2.556 2.557v5.144c0 .237.257.509.467.619l37.786 21.583a.63.63 0 0 0 .318.083a.634.634 0 0 0 .324-.088L87.039 28.53c.206-.115.752-.419.957-.559c.248-.169.504-.322.504-.625v-4.601a2.559 2.559 0 0 0-2.556-2.556zm2.237 15.457a.644.644 0 0 0-.645.004L66.799 47.851a.637.637 0 0 0-.145.985l20.74 22.357a.632.632 0 0 0 .467.204a.64.64 0 0 0 .639-.639V36.201a.638.638 0 0 0-.319-.555zM60.823 51.948a.636.636 0 0 0-.791-.118l-8.312 4.891a3.243 3.243 0 0 1-3.208.021l-7.315-4.179a.64.64 0 0 0-.751.086L12.668 78.415a.64.64 0 0 0 .114 1.02c.432.254.849.375 1.273.375h71.153a.635.635 0 0 0 .585-.385a.635.635 0 0 0-.118-.689L60.823 51.948zm-26.489-2.347a.639.639 0 0 0-.115-1.023L12.453 36.146a.638.638 0 0 0-.953.556v32.62a.637.637 0 0 0 1.073.468l21.761-20.189z"
                  />
                </svg>
              </span>

              <input
                className="w-full h-12 bg-slate-100 rounded-br-md rounded-tr-md text-zinc-700 cursor-text flex-grow py-3 pr-6 pl-14"
                placeholder="E-mail"
                type="email"
                name="email"
                {...register("email", { required: "your email is required" })}
              />
              {errors.email && <span className="text-red-500 my-1">{errors.email?.message}</span>}
            </div>
          </div>

          <div className="items-center">
            <div className="grid">
              <button className="items-start bg-sky-600 text-white cursor-pointer font-medium py-2 px-4 text-center align-middle border border-sky-600 border-solid rounded-md overflow-hidden">
                Forgot Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
