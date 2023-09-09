/* eslint-disable @next/next/no-img-element */
import React from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";
import Title from "../Common/Title";

const Login = () => {
  return (
    <section className="w-full h-full lg:h-screen grid grid-cols-1 lg:grid-cols-2 pb-5 lg:pb-0">
      <div className="bg-primary-50 flex justify-center items-center px-3 py-10">
        <div>
          <div className="text-zinc-500 text-[0.94rem] leading-5 text-center p-3">
            <Title>Welcome to our largest community</Title>

            <p className="text-zinc-800 mt-4">Let&apos;s learn something new today!</p>
          </div>
          <div className="py-10">
            <Image width={500} height={500} src="/auth.svg" alt="" className="w-full h-full" />
          </div>
          <div className=" md:flex justify-center items-center text-zinc-500 text-[0.94rem] leading-5 space-y-3 md:space-y-0">
            <ul className="flex list-disc">
              <li className="h-10 w-10 -mr-3">
                <img
                  className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                  src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
                  alt=""
                />
              </li>

              <li className="h-10 w-10 -mr-3">
                <img
                  className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                  src="https://eduport.webestica.com/assets/images/avatar/02.jpg"
                  alt=""
                />
              </li>

              <li className="h-10 w-10 -mr-3">
                <img
                  className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                  src="https://eduport.webestica.com/assets/images/avatar/03.jpg"
                  alt=""
                />
              </li>

              <li className="h-10 w-10">
                <img
                  className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                  src="https://eduport.webestica.com/assets/images/avatar/04.jpg"
                  alt=""
                />
              </li>
            </ul>

            <p className="text-zinc-800 ml-0 md:ml-4">4k+ Students joined us, now it&apos;s your turn.</p>
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-center items-center px-3 py-0 md:py-10">
        <div className="w-full md:w-[85%] lg:w-[65%]">
          {" "}
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
