/* eslint-disable @next/next/no-img-element */
import React from "react";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-20 items-center">
      <div>
        <img className="rounded-xl" src="https://i.ibb.co/xm7tdfv/04.jpg" alt="" />
      </div>
      <div>
        <div className="text-zinc-500 text-[0.94rem] leading-5 px-6">
          <h2 className="text-zinc-800 text-[2.34rem] leading-none font-bold mb-4">Welcome to WBS University</h2>

          <p className="mb-6">
            Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.
          </p>

          <div className="flex flex-wrap -ml-3 -mr-3 -mt-6">
            <div className="w-[50%] mt-6 px-3">
              <div className="items-center flex">
                <div className="h-10 w-10 bg-amber-400 text-white text-[1.31rem] leading-7 text-center rounded-md">
                  <i className="inline-block" />
                </div>

                <div className="ml-4">
                  <h6 className="text-zinc-800 font-bold">Undergraduate</h6>

                  <div className="text-[0.82rem]">
                    <i className="mr-2" />
                    Onsite
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] mt-6 px-3">
              <div className="items-center flex">
                <div className="h-10 w-10 bg-cyan-600 text-white text-[1.31rem] leading-7 text-center rounded-md">
                  <i className="inline-block" />
                </div>

                <div className="ml-4">
                  <h6 className="text-zinc-800 font-bold">Graduate</h6>

                  <div className="text-[0.82rem]">
                    <i className="mr-2" />
                    Online + Onsite
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] mt-6 px-3">
              <div className="items-center flex">
                <div className="h-10 w-10 bg-rose-600 text-white text-[1.31rem] leading-7 text-center rounded-md">
                  <i />
                </div>

                <div className="ml-4">
                  <h6 className="text-zinc-800 font-bold">Post Graduate</h6>

                  <div className="text-[0.82rem]">
                    <i className="mr-2" />
                    Online + Onsite
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] mt-6 px-3">
              <div className="items-center flex">
                <div className="h-10 w-10 bg-violet-700 text-white text-[1.31rem] leading-7 text-center rounded-md">
                  <i />
                </div>

                <div className="ml-4">
                  <h6 className="text-zinc-800 font-bold">Online education</h6>

                  <div className="text-[0.82rem]">
                    <i className="mr-2" />
                    Coming soon...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="bg-sky-600/[0.1] hover:bg-primary-500 text-sky-600 hover:text-white transition duration-300 ease-in-out cursor-pointer inline-block font-medium mt-6 py-2 px-4 text-center align-middle border border-solid rounded-md overflow-hidden"
            href="https://eduport.webestica.com/#"
          >
            More about us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
