/* eslint-disable @next/next/no-img-element */
import React from "react";

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
                  <i className="text-amber-400 inline-block ml-1" />
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

                <ul>
                  <li className="inline-block mr-2">
                    <a className="text-indigo-500 cursor-pointer mr-1" href="#">
                      <i className="w-5 inline-block" />
                    </a>
                  </li>

                  <li className="inline-block mr-2">
                    <a className="cursor-pointer mr-1" href="#">
                      <i className="w-5 inline-block" />
                    </a>
                  </li>

                  <li className="inline-block mr-2">
                    <a className="text-sky-400 cursor-pointer mr-1" href="#">
                      <i className="w-5 inline-block" />
                    </a>
                  </li>

                  <li className="inline-block">
                    <a className="text-sky-600 cursor-pointer" href="#">
                      <i className="w-5 inline-block" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorList;
