/* eslint-disable @next/next/no-img-element */
import Title from "@/components/Common/Title";
import React from "react";

const HeadingHero = () => {
  return (
    <div className="py-12 bg-[#F5F7F9] rounded-lg">
      <div className=" text-zinc-500 text-[0.94rem] grid grid-cols-1 lg:grid-cols-4 items-center">
        <div className="px-3.5 text-center">
          <img className="h-80 w-72 align-middle overflow-clip" src="/category-1.svg" alt="" />
        </div>

        <div className="px-12 relative text-center col-span-2">
          <Title>What do you want to learn?</Title>

          <p className="my-4">Grow your skill with the most reliable online courses and certifications</p>

          <form className="bg-white rounded-md p-2">
            <div className="w-full relative">
              <input
                className="w-full h-10 rounded-bl-md rounded-tl-md text-zinc-700 cursor-text flex-grow mr-1 py-2 px-4 outline-none"
                placeholder="Search course "
                type="search"
              />

              <button className="items-start bg-zinc-800 text-white cursor-pointer font-medium py-2 px-4 align-middle z-[2] border border-zinc-800 border-solid rounded-md overflow-hidden absolute top-0 right-0">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="">
          <img className="h-64 w-64 align-middle overflow-clip" src="/category-2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeadingHero;
