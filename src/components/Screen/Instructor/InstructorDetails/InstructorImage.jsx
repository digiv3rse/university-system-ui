/* eslint-disable @next/next/no-img-element */
import { StarSVG } from "@/components/Common/SVGCollection";
import React from "react";

const InstructorImage = () => {
  return (
    <div className="bg-white text-zinc-500 text-[0.94rem] leading-5 break-words text-center rounded-lg p-2 shadow-3xl">
      <div className="rounded-lg">
        <img className="h-96 w-96 align-middle rounded-lg overflow-clip" src="https://eduport.webestica.com/assets/images/instructor/07.jpg" alt="" />
      </div>

      <div className="p-4">
        <StarSVG />

        <ul>
          <li className="inline-block mr-2">
            {" "}
            <a
              className="bg-indigo-500 text-white cursor-pointer inline-block mb-1.5 py-1.5 px-2 align-middle rounded overflow-hidden"
              href="https://eduport.webestica.com/#"
            >
              <i className="w-5 inline-block" />
            </a>{" "}
          </li>

          <li className="inline-block mr-2">
            {" "}
            <a
              className="text-white cursor-pointer inline-block mb-1.5 py-1.5 px-2 align-middle rounded overflow-hidden"
              href="https://eduport.webestica.com/#"
            >
              <i className="w-5 inline-block" />
            </a>{" "}
          </li>

          <li className="inline-block mr-2">
            {" "}
            <a
              className="bg-sky-400 text-white cursor-pointer inline-block mb-1.5 py-1.5 px-2 align-middle rounded overflow-hidden"
              href="https://eduport.webestica.com/#"
            >
              <i className="w-5 inline-block" />
            </a>{" "}
          </li>

          <li className="inline-block">
            {" "}
            <a
              className="bg-sky-600 text-white cursor-pointer inline-block mb-1.5 py-1.5 px-2 align-middle rounded overflow-hidden"
              href="https://eduport.webestica.com/#"
            >
              <i className="w-5 inline-block" />
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstructorImage;
