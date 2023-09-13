"use client";

import FilterableList from "@/components/Common/FilterableList";
import React from "react";

const Filters = () => {
  const itemsCategory = ["Accounting", "All", "Design", "Development", "Finance", "Legal", "Marketing", "Photography", "Translation", "Writing"];
  const priceLevel = ["All", "Free", "Paid"];
  const skillLevel = ["Advanced", "All Levels", "Beginners", "Intermediate"];
  const languages = ["Bengali", "English", "Hindi", "France", "Spanish", "Russian", "Others"];

  const handleFilters = (e) => {
    console.log("filters");
    e.preventDefault();
  };

  return (
    <section className="mt-10">
      {/* ================================================  */}
      <form onSubmit={handleFilters} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-9 gap-4 bg-[#F5F7F9] p-5 rounded-lg">
        <div className="xl:col-span-2">
          <div className="text-zinc-500 text-[0.94rem] leading-5 border border-gray-200 border-solid rounded-md py-[2px] bg-white">
            <div className="w-full items-stretch flex">
              <input
                className="w-full h-10 bg-white rounded-bl-md rounded-tl-md text-zinc-700 cursor-text flex-grow py-2 px-4 focus:outline-none"
                placeholder="Enter Keyword"
                type="search"
              />
            </div>
          </div>
        </div>
        {/* ============================================== */}
        <div className="xl:col-span-3 ">
          <div className="sm:flex sm:gap-x-4 space-y-4 sm:space-y-0 justify-between">
            <div className="text-zinc-500 text-[0.94rem] leading-5 border border-gray-200 border-solid rounded-md py-1 bg-white">
              {" "}
              <FilterableList items={itemsCategory} title="Category" />
            </div>{" "}
            <div className="text-zinc-500 text-[0.94rem] leading-5 border border-gray-200 border-solid rounded-md py-1 bg-white">
              {" "}
              <FilterableList items={priceLevel} title="Price Level" />
            </div>
          </div>
        </div>
        {/* ============================================== */}
        <div className="xl:col-span-3">
          <div className="sm:flex sm:gap-x-4 space-y-4 sm:space-y-0 justify-between">
            <div className="text-zinc-500 text-[0.94rem] leading-5 border border-gray-200 border-solid rounded-md py-1 bg-white">
              {" "}
              <FilterableList items={skillLevel} title="Skill Level" />
            </div>{" "}
            <div className="text-zinc-500 text-[0.94rem] leading-5 border border-gray-200 border-solid rounded-md py-1 bg-white">
              {" "}
              <FilterableList items={languages} title="Language" />
            </div>
          </div>
        </div>
        {/* ============================================== */}
        <div className="bg-primary-500 hover:bg-primary-600 duration-300 transition ease-in-out grid place-items-center text-white font-medium rounded-md cursor-pointer py-2 lg:py-0">
          <button className="border-none outline-none" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="inline-block">
              <path
                fill="currentColor"
                d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"
              />
            </svg>
          </button>
        </div>
        {/* ============================================== */}
      </form>
    </section>
  );
};

export default Filters;
