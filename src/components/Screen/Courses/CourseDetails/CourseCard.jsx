/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const CourseCard = () => {
  return (
    <div className="">
      <div className="bg-white text-zinc-500 flex flex-col text-[0.94rem] leading-5 break-words relative rounded-lg p-2 shadow-3xl">
        <div className="rounded-lg overflow-hidden relative">
          <img
            className="w-full h-full align-middle rounded-lg overflow-clip"
            src="https://eduport.webestica.com/assets/images/courses/4by3/01.jpg"
            alt=""
          />

          <div className="items-start bottom-0 flex flex-col left-[40%] absolute top-0 z-[2] rounded-lg p-4">
            <div className="m-auto bg-white/40  p-1 animate-pulse rounded-[50%]">
              <Link
                className="h-10 w-10 text-rose-600 cursor-pointer inline-block font-medium text-center align-middle border border-solid rounded-full overflow-hidden bg-white"
                href="https://www.youtube.com/embed/tXHviS-4ygo"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" className="inline-block pl-1 pt-1">
                  <path
                    fill="currentColor"
                    d="m11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-grow p-4">
          <div className="items-center flex justify-between">
            <div>
              <div className="items-center flex">
                <h3 className="text-zinc-800 text-3xl font-bold mr-2">$150</h3>

                <span className="mr-2 line-through">$350</span>

                <span className="bg-orange-500 text-white text-[0.80rem] py-1 px-2 text-center rounded-md">60% off</span>
              </div>

              <p className="text-rose-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 36 36" className="inline-block mr-1">
                  <path
                    fill="currentColor"
                    d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm6.2 21.18a1 1 0 0 1-1.39.28l-5.9-4v-8.71a1 1 0 0 1 2 0v7.65l5 3.39a1 1 0 0 1 .29 1.39Zm-.35-14.95a11.39 11.39 0 1 0-8.54 20.83L15 30.63a13 13 0 1 1 9.7-23.77Z"
                    className="clr-i-solid clr-i-solid-path-1"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                5 days left at this price
              </p>
            </div>

            <div>
              <a
                className="bg-slate-100 text-zinc-950 cursor-pointer inline-block text-[0.81rem] mb-1.5 py-1.5 px-3 text-center align-middle border border-slate-100 border-solid rounded-md overflow-hidden hover:bg-slate-300 duration-300"
                href="https://eduport.webestica.com/#"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.341 3.341 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.346 3.346 0 0 1-2.384-.994l-4.635 3.156a3.336 3.336 0 0 1-.182 1.917l5.082 3.34a3.346 3.346 0 0 1 2.12-.753a3.341 3.341 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.341 3.341 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.346 3.346 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.317 3.317 0 0 1-.161-1.023Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <a
              className="text-sky-600 cursor-pointer font-medium py-2 px-4 text-center align-middle border border-sky-600 border-solid rounded-md overflow-hidden hover:bg-primary-600 duration-300 transition hover:text-white"
              href="/#"
            >
              Free trial
            </a>

            <a
              className="bg-emerald-500 text-white cursor-pointer font-medium py-2 px-4 text-center align-middle border border-emerald-500 border-solid rounded-md overflow-hidden hover:bg-primary-600 duration-300 transition"
              href="/#"
            >
              Buy course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
