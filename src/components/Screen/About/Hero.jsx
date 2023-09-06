/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <div className="mt-10 md:mt-16">
      {/* ================== */}
      <div className="text-zinc-500 flex flex-wrap text-[0.94rem] leading-5">
        <div className="lg:w-[83.3333%] mx-auto mt-6 px-3 relative text-center">
          <h1 className="text-zinc-800 text-3xl sm:text-[2.34rem] leading-none font-bold mb-2">
            Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.
          </h1>
        </div>
      </div>

      {/* ================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mt-8 lg:mt-16">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {" "}
            <div>
              <div className="mb-6">
                <img
                  className="lg:h-28 lg:w-48 text-zinc-500 align-middle rounded-2xl overflow-clip"
                  src="https://eduport.webestica.com/assets/images/about/05.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="lg:h-56 w-full text-zinc-500 align-middle rounded-2xl overflow-clip"
                  src="https://eduport.webestica.com/assets/images/about/03.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <img
                className="align-middle rounded-2xl overflow-clip h-full xl:h-auto"
                src="https://eduport.webestica.com/assets/images/about/09.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#f28e26] to-[#fd644f] p-4 xl:p-12 rounded-2xl">
            <span className="text-white text-[0.94rem] leading-5">Our goal:</span>
            <h3 className="text-white text-3xl font-bold">“Be open to new ideas and approaches. Develop your problem-solving skills.”</h3>
          </div>
          <div className="mt-6">
            <img
              className=" w-full h-full lg:h-28 lg:w-48 text-zinc-500 align-middle rounded-2xl overflow-clip"
              src="https://eduport.webestica.com/assets/images/about/10.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ================== */}
    </div>
  );
};

export default Hero;
