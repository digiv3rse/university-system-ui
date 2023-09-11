import React from "react";
import { ArrowRight } from "./SVGCollection";
import Link from "next/link";

const Pagination = () => {
  return (
    <div className="mt-10">
      <div className="text-zinc-500 flex text-[0.94rem] leading-5 justify-center">
        <ul className="flex rounded-md p-1">
          <li className="list-item float-left mx-1 mt-1">
            <a
              className="bg-primary-600/[0.1] text-primary-600 hover:text-white duration-300 transition ease-in-out cursor-pointer py-3 px-4 rounded-md"
              href="#"
            >
              <i className="inline-block" />
            </a>
          </li>

          <li className="list-item float-left mx-1 mt-1">
            <a
              className="bg-primary-600/[0.1] hover:bg-primary-600 text-primary-600 hover:text-white duration-300 transition ease-in-out cursor-pointer py-3 px-4 rounded-md"
              href="#"
            >
              1
            </a>
          </li>

          <li className="list-item float-left mx-1 mt-1">
            <a
              className="bg-primary-600/[0.1] hover:bg-primary-600 text-primary-600 hover:text-white duration-300 transition ease-in-out cursor-pointer py-3 px-4 z-[3] rounded-md"
              href="#"
            >
              2
            </a>
          </li>

          <li className="list-item float-left mx-1 mt-1">
            <a
              className="bg-primary-600/[0.1] hover:bg-primary-600 text-primary-600 hover:text-white duration-300 transition ease-in-out cursor-pointer py-3 px-4 rounded-md"
              href="#"
            >
              ..
            </a>
          </li>

          <li className="list-item float-left mx-1 mt-1">
            <Link
              className="bg-primary-600/[0.1] hover:bg-primary-600 text-primary-600 hover:text-white duration-300 transition ease-in-out cursor-pointer py-3 px-4 rounded-md"
              href="#"
            >
              6
            </Link>
          </li>

          <li className="list-item float-left mx-1 mt-1">
            <Link
              className="bg-primary-600/[0.1] hover:bg-primary-600 text-primary-600 hover:text-white duration-300 transition ease-in-out cursor-pointer py-3 px-4 rounded-md"
              href="#"
            >
              <ArrowRight className="inline-block" fillColor="currentColor" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
