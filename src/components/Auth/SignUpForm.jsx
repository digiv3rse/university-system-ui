/* eslint-disable @next/next/no-img-element */
import React from "react";
import Title from "../Common/Title";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className="mt-10 lg:mt-0">
      <div className="text-zinc-500 text-[0.94rem] leading-5">
        <img className="h-10 w-10 mb-2 align-middle overflow-clip" src="https://eduport.webestica.com/assets/images/element/03.svg" alt="" />

        <Title>Sign up for your account!</Title>

        <p className="text-[1.17rem] leading-7 my-4">Nice to see you! Please Sign up with your account.</p>

        <form>
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
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="inline-block mb-2">Password *</label>

            <div className="w-full items-stretch flex flex-wrap relative">
              <span className="items-center bg-slate-100 rounded-bl-md rounded-tl-md text-zinc-400 flex py-2 px-3 absolute top-1 left-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="#a3a7ad"
                    d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7z"
                  />
                </svg>
              </span>

              <input
                className="w-full h-12 bg-slate-100 rounded-br-md rounded-tr-md text-zinc-700 cursor-text flex-grow py-3 pr-6 pl-14"
                placeholder="*********"
                type="password"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="inline-block mb-2">Confirm Password *</label>

            <div className="w-full items-stretch flex flex-wrap relative">
              <span className="items-center bg-slate-100 rounded-bl-md rounded-tl-md text-zinc-400 flex py-2 px-3 absolute top-1 left-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="#a3a7ad"
                    d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7z"
                  />
                </svg>
              </span>

              <input
                className="w-full h-12 bg-slate-100 rounded-br-md rounded-tr-md text-zinc-700 cursor-text flex-grow py-3 pr-6 pl-14"
                placeholder="*********"
                type="password"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-1 min-h-[1.50rem] pl-6">
              <input
                className="h-4 w-4 bg-gray-100 text-black cursor-pointer float-left -ml-6 mt-1 align-top border border-black/[0.25] border-solid rounded"
                type="checkbox"
              />

              <label className="cursor-pointer inline-block">
                By signing up, you agree to the
                <a className="text-sky-600" href="#">
                  {" "}
                  terms of service
                </a>
              </label>
            </div>
          </div>

          <div className="items-center">
            <div className="grid">
              <button className="items-start bg-sky-600 text-white cursor-pointer font-medium py-2 px-4 text-center align-middle border border-sky-600 border-solid rounded-md overflow-hidden">
                Sign Up
              </button>
            </div>
          </div>
        </form>

        <div className="">
          <p className="my-8 text-center">Or</p>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 justify-center items-center">
            <Link className="bg-blue-500 text-white rounded-md p-3 block text-center" href="#">
              {/* <i className="w-5 inline-block mr-2" /> */}
              Signup with Google
            </Link>

            <Link className="bg-indigo-500 text-white rounded-md p-3 block text-center" href="#">
              {/* <i className="w-5 inline-block mr-2" /> */}
              Signup with Facebook
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <span>
            Already have an account?
            <a className="text-sky-600 cursor-pointer" href="sign-in.html">
              {" "}
              Sign in here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
