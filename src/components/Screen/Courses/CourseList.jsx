/* eslint-disable @next/next/no-img-element */
import { StarSVG } from "@/components/Common/SVGCollection";
import Link from "next/link";
import React from "react";

const CourseList = () => {
  return (
    <div className="text-zinc-500 text-[0.94rem] leading-5">
      <div className="h-full bg-white flex flex-col break-words rounded-lg shadow-3xl">
        <img
          className="w-full h-full rounded-tl-lg rounded-tr-lg align-middle overflow-clip object-fill object-center"
          src="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
          alt=""
          loading="lazy"
        />

        <div className="flex-grow px-5 pt-4">
          <div className="flex justify-between mb-2">
            <a
              className="bg-violet-700/[0.1] text-violet-700 cursor-pointer text-[0.80rem] py-1 px-2 text-center rounded-md"
              href="https://eduport.webestica.com/#"
            >
              All level
            </a>

            <Link className="text-zinc-800 cursor-pointer" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07Z"
                />
              </svg>
            </Link>
          </div>

          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2">
            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
              Sketch from A to Z: for app designer
            </a>
          </h5>

          <StarSVG className="items-center flex justify-start mb-4" />
        </div>
        <hr className="my-4" />
        <div className="rounded-bl-lg rounded-br-lg pb-4 px-4">
          <div className="flex justify-between">
            <span className="text-zinc-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-rose-600 inline-block mr-2">
                <path
                  fill="currentColor"
                  d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"
                />
              </svg>
              12h 56m
            </span>

            <span className="text-zinc-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-orange-600 inline-block mr-2">
                <path
                  fill="currentColor"
                  d="M3.025 19V5H21v14H3.025Zm12.65-8H19V7h-3.325v4Zm-5.325 0h3.325V7H10.35v4Zm-5.325 0H8.35V7H5.025v4Zm0 6H8.35v-4H5.025v4Zm5.325 0h3.325v-4H10.35v4Zm5.325 0H19v-4h-3.325v4Z"
                />
              </svg>
              15 lectures
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
