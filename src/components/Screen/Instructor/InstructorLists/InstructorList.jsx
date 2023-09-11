/* eslint-disable @next/next/no-img-element */
import React from "react";
import SocialLinksInstructor from "./SocialLinksInstructor";

const InstructorList = ({ instructor }) => {
  const { name, position, specialty, description, rating, imageSrc } = instructor;
  return (
    <div className="w-full lg:w-[75%] xl:w-full mx-auto">
      <div className="bg-white text-zinc-500 text-[0.94rem] leading-5 break-words rounded-lg">
        <div className=" grid grid-cols-1 md:grid-cols-3 shadow-3xl p-2 rounded-lg">
          <div className="">
            <img className="h-full xl:h-52 w-full xl:w-52 align-middle rounded-lg overflow-clip" src={imageSrc} alt="" />
          </div>

          <div className="md:col-span-2">
            <div className="py-4 px-5">
              <div className="flex justify-between mb-4">
                <div>
                  <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold hover:text-primary-600 duration-300 transition ease-in-out">
                    <a className="cursor-pointer" href="#">
                      {name}
                    </a>
                  </h5>

                  <p className="text-[0.82rem]">{position}</p>
                </div>

                <span className="text-zinc-800 mb-2">
                  {rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-amber-400 inline-block ml-1 -mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              </div>

              <p
                className="mb-4 text-ellipsis overflow-hidden"
                style={{
                  display: "-webkit-box",
                }}
              >
                {description}...
              </p>

              <div className="items-center flex justify-between">
                <h6 className="text-orange-500 font-bold">{specialty}</h6>

                <SocialLinksInstructor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorList;
