import React from "react";
import FaqQuestions from "./FaqQuestions";
import Link from "next/link";

const Faqs = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-zinc-800 text-3xl font-bold">Frequently Asked Questions</h3>
          <FaqQuestions />
        </div>
        <div>
          <div className="text-zinc-500 text-[0.94rem] leading-5">
            <div className="items-center bg-cyan-600/[0.1] flex justify-between mb-4 rounded-md p-2">
              <h6 className="text-cyan-600 font-bold">Last Question</h6>

              <Link className="text-white bg-cyan-600 cursor-pointer text-[0.80rem] py-1 px-2 text-center rounded-md" href="/">
                2D ago
              </Link>
            </div>

            <div className="items-center bg-rose-600/[0.1] flex justify-between mb-4 rounded-md p-2">
              <h6 className="text-rose-600 font-bold">Total Question</h6>

              <Link className="text-white bg-rose-600 cursor-pointer text-[0.80rem] py-1 px-2 text-center rounded-md" href="/">
                15,525
              </Link>
            </div>

            <div className="items-center bg-emerald-500/[0.1] flex justify-between mb-4 rounded-md p-2">
              <h6 className="text-emerald-500 font-bold">Answer</h6>

              <Link className="text-white bg-emerald-500 cursor-pointer text-[0.80rem] py-1 px-2 text-center rounded-md" href="/">
                12536
              </Link>
            </div>
          </div>

          {/* ================================== topic */}
          {RecentTopic()}

          {/* ================================== tags */}
          <div className="bg-white text-zinc-500 flex flex-col flex-grow text-[0.94rem] leading-5 break-words rounded-lg p-6 shadow-3xl mt-8">
            <h4 className="text-zinc-800 text-[1.64rem] leading-8 font-bold mb-4">Popular Tags</h4>

            <ul>
              <li className="inline-block mr-2">
                <Link
                  className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden  hover:bg-zinc-200 duration-300"
                  href="/#"
                >
                  blog
                </Link>
              </li>

              <li className="inline-block mr-2">
                <Link
                  className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden hover:bg-zinc-200 duration-300"
                  href="/#"
                >
                  business
                </Link>
              </li>

              <li className="inline-block mr-2">
                <Link
                  className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden hover:bg-zinc-200 duration-300"
                  href="/#"
                >
                  theme
                </Link>
              </li>

              <li className="inline-block mr-2">
                <Link
                  className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden hover:bg-zinc-200 duration-300"
                  href="/#"
                >
                  bootstrap
                </Link>
              </li>

              <li className="inline-block mr-2">
                <Link
                  className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden hover:bg-zinc-200 duration-300"
                  href="/#"
                >
                  data science
                </Link>
              </li>

              <li className="inline-block mr-2">
                <Link
                  className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden hover:bg-zinc-200 duration-300"
                  href="/#"
                >
                  web development
                </Link>
              </li>

              <li className="inline-block mr-2">
                <Link
                  className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden hover:bg-zinc-200 duration-300"
                  href="/#"
                >
                  tips
                </Link>
              </li>

              <li className="inline-block">
                <Link
                  className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden hover:bg-zinc-200 duration-300"
                  href="/#"
                >
                  machine learning
                </Link>
              </li>
            </ul>
          </div>

          {/* ================================== end */}
        </div>
      </div>
    </div>
  );
};

export default Faqs;

// ================================ recent topics
function RecentTopic() {
  return (
    <div className="bg-white text-zinc-500 flex flex-col flex-grow text-[0.94rem] leading-5 break-words rounded-lg p-6 shadow-3xl mt-8">
      <h4 className="text-zinc-800 text-[1.64rem] leading-8 font-bold mb-4">Related Topic</h4>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Business
        </Link>

        <span className="text-[0.82rem]">(21)</span>
      </div>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Development
        </Link>

        <span className="text-[0.82rem]">(86)</span>
      </div>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Design
        </Link>

        <span className="text-[0.82rem]">(92)</span>
      </div>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Marketing
        </Link>

        <span className="text-[0.82rem]">(62)</span>
      </div>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Technology
        </Link>

        <span className="text-[0.82rem]">(31)</span>
      </div>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Course Taking
        </Link>

        <span className="text-[0.82rem]">(06)</span>
      </div>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Getting Started
        </Link>

        <span className="text-[0.82rem]">(28)</span>
      </div>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Mobile
        </Link>

        <span className="text-[0.82rem]">(18)</span>
      </div>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Payment Option
        </Link>

        <span className="text-[0.82rem]">(32)</span>
      </div>

      <div className="items-center flex justify-between mb-2">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Account & Profile
        </Link>

        <span className="text-[0.82rem]">(56)</span>
      </div>

      <div className="items-center flex justify-between">
        <Link className="text-zinc-800 cursor-pointer" href="/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-orange-500 inline-block">
            <path
              fill="currentColor"
              d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"
            />
          </svg>
          Course taking
        </Link>

        <span className="text-[0.82rem]">(45)</span>
      </div>
    </div>
  );
}
