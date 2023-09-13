import Link from "next/link";
import React from "react";

const CourseTags = () => {
  return (
    <div>
      <div className="bg-white text-zinc-500 flex flex-col flex-grow text-[0.94rem] leading-5 break-words rounded-lg p-6 shadow-3xl">
        <h4 className="text-zinc-800 text-[1.64rem] leading-8 font-bold mb-4">Popular Tags</h4>

        <ul>
          <li className="inline-block mr-2">
            {" "}
            <Link
              className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden"
              href="#"
            >
              blog
            </Link>{" "}
          </li>

          <li className="inline-block mr-2">
            {" "}
            <Link
              className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden"
              href="#"
            >
              business
            </Link>{" "}
          </li>

          <li className="inline-block mr-2">
            {" "}
            <Link
              className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden"
              href="#"
            >
              theme
            </Link>{" "}
          </li>

          <li className="inline-block mr-2">
            {" "}
            <Link
              className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden"
              href="#"
            >
              bootstrap
            </Link>{" "}
          </li>

          <li className="inline-block mr-2">
            {" "}
            <Link
              className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden"
              href="#"
            >
              data science
            </Link>{" "}
          </li>

          <li className="inline-block mr-2">
            {" "}
            <Link
              className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden"
              href="#"
            >
              web development
            </Link>{" "}
          </li>

          <li className="inline-block mr-2">
            {" "}
            <Link
              className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden"
              href="#"
            >
              tips
            </Link>{" "}
          </li>

          <li className="inline-block">
            {" "}
            <Link
              className="cursor-pointer inline-block text-[0.81rem] font-medium mb-1.5 py-1.5 px-3 text-center align-middle border border-gray-300 border-solid rounded overflow-hidden"
              href="#"
            >
              machine learning
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseTags;
