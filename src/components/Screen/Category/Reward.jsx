/* eslint-disable @next/next/no-img-element */
import React from "react";

const Reward = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="h-full bg-sky-600/[0.1] text-zinc-500 text-[0.94rem] leading-5 rounded-lg px-4 py-8 sm:p-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 ">
            <div className="flex flex-wrap sm:col-span-2">
              <div className="px-3.5">
                <h3 className="text-zinc-800 text-3xl font-bold mb-1">Earn a Certificate</h3>

                <p className="text-zinc-800 text-[1.17rem] leading-7 mb-4">Get the right professional certificate program for you.</p>

                <a
                  className="text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-sky-600 border-solid rounded-md overflow-hidden bg-primary-600 hover:bg-primary-700 duration-300 transition ease-in-out"
                  href="#"
                >
                  View Programs
                </a>
              </div>
            </div>
            <div className=" w-full">
              <img
                className="w-full h-full object-cover object-top overflow-clip"
                src="https://eduport.webestica.com/assets/images/element/08.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="h-full bg-zinc-400/[0.1] text-zinc-500 text-[0.94rem] leading-5 rounded-lg px-4 py-8 sm:p-12 grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 ">
            <div className="flex flex-wrap sm:col-span-2">
              <div className="px-3.5">
                <h3 className="text-zinc-800 text-3xl font-bold mb-1">Best Rated Courses</h3>

                <p className="text-zinc-800 text-[1.17rem] leading-7 mb-4">Enroll now in the most popular and best rated courses.</p>

                <a
                  className="bg-amber-400 text-black cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-amber-400 border-solid rounded-md overflow-hidden hover:bg-amber-500 duration-300 transition ease-in-out"
                  href="#"
                >
                  View Courses
                </a>
              </div>
            </div>
            <div className="w-full">
              <img
                className="w-full h-full object-cover object-top overflow-clip"
                src="https://eduport.webestica.com/assets/images/element/15.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
