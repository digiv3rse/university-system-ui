"use client";

import Link from "next/link";
import React from "react";
import FilterableList from "./FilterableList";

const Filters = () => {
  const items = ["Accounting", "All", "Design", "Development", "Finance", "Legal", "Marketing", "Photography", "Translation", "Writing"];
  return (
    <section className="mt-10">
      {/* =========================  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-6">
        <div className="xl:col-span-2">
          <form className="text-zinc-500 text-[0.94rem] leading-5 border border-gray-100 border-solid rounded-md p-2">
            <div className="w-full items-stretch flex">
              <input
                className="w-full h-10 bg-white rounded-bl-md rounded-tl-md text-zinc-700 cursor-text flex-grow mr-1 py-2 px-4 focus:outline-none"
                placeholder="Search instructor"
                type="search"
              />

              <button className="items-start bg-sky-600 text-white cursor-pointer py-2 px-3 align-middle z-[2] border border-sky-600 border-solid rounded-md overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                  <path
                    fill="white"
                    d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="xl:col-span-2 text-zinc-500 text-[0.94rem] leading-5 border border-gray-100 border-solid rounded-md p-2">
          <FilterableList items={items} />
        </div>
        <div className="xl:col-span-2 text-zinc-500 text-[0.94rem] leading-5 border border-gray-100 border-solid rounded-md p-2">
          <div className="">dsf</div>
        </div>

        <div className="bg-primary-500 hover:bg-primary-600 duration-300 transition ease-in-out grid place-items-center text-white font-medium rounded-md">
          <Link className="" href="#">
            Filter Results
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Filters;
