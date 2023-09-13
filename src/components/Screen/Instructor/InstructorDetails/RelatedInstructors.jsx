/* eslint-disable @next/next/no-img-element */
import { StarSVG } from "@/components/Common/SVGCollection";
import Link from "next/link";
import React from "react";

const RelatedInstructors = ({ instructor }) => {
  return (
    <div>
      <div className="text-zinc-500 inline-block flex-col text-[0.94rem] leading-5 break-words relative align-top rounded-lg">
        <div className="relative">
          <img className="align-middle rounded-lg overflow-clip w-full h-full object-fill object-center" src={instructor.imageSrc} alt="" />

          <div className="bottom-0 flex flex-col right-0 absolute top-0 z-[2] rounded-lg p-4">
            <div className="w-full mt-auto space-x-2">
              <Link className="bg-cyan-600 text-white cursor-pointer inline-block text-[0.80rem] py-1 px-2 text-center rounded" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="mr-2 inline-block">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.25 9.25V6L8 2.75L1.75 6L8 9.25l3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5"
                  />
                </svg>
                118
              </Link>

              <Link className="bg-orange-500 text-white cursor-pointer inline-block text-[0.80rem] py-1 px-2 text-center rounded" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" className="inline-block mr-2">
                  <path
                    fill="currentColor"
                    d="M24 30H8a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2v16.618l-5-2.5l-5 2.5V4H8v24h16v-4h2v4a2.003 2.003 0 0 1-2 2Zm-3-14.118l3 1.5V4h-6v13.382Z"
                  />
                </svg>
                09
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-grow py-4 px-5 text-center">
          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2 hover:text-primary-600 duration-300 ease-in-out">
            <a className="cursor-pointer" href="#">
              Samuel Bishop
            </a>
          </h5>

          <p className="mb-2">{instructor.specialty}</p>

          <StarSVG className="items-center flex justify-center mb-4" />
        </div>
      </div>
    </div>
  );
};

export default RelatedInstructors;
