/* eslint-disable @next/next/no-img-element */
import React from "react";

const RecentViewsCourse = () => {
  return (
    <div>
      <div className="bg-white text-zinc-500 flex flex-col flex-grow text-[0.94rem] leading-5 break-words rounded-lg p-6 shadow-3xl">
        <h4 className="text-zinc-800 text-[1.64rem] leading-8 font-bold mb-4">Recently Viewed</h4>

        <div className="flex flex-wrap mb-4 -ml-2 -mr-2">
          <div className="w-[33.3333%] px-2">
            <img
              className="h-20 w-28 align-middle rounded-md overflow-clip"
              src="https://eduport.webestica.com/assets/images/courses/4by3/21.jpg"
              alt=""
            />
          </div>

          <div className="w-[66.6667%] px-2">
            <h6 className="text-zinc-800 font-bold  hover:text-primary-600 transition duration-300">
              <a className="cursor-pointer" href="/#">
                Fundamentals of Business Analysis
              </a>
            </h6>

            <ul className="flex flex-col justify-between list-disc mt-1 rounded-md">
              <li className="flex justify-between py-1.5 rounded-md">
                <span className="text-emerald-500 mr-1">$130</span>

                <span className="text-zinc-800 mb-2 mr-1">
                  4.5
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-amber-400 inline-block mx-1 -mt-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap -ml-2 -mr-2">
          <div className="w-[33.3333%] px-2">
            <img
              className="h-20 w-28 align-middle rounded-md overflow-clip"
              src="https://eduport.webestica.com/assets/images/courses/4by3/18.jpg"
              alt=""
            />
          </div>

          <div className="w-[66.6667%] px-2">
            <h6 className="text-zinc-800 font-bold hover:text-primary-600 transition duration-300">
              <a className="cursor-pointer" href="#">
                The Complete Video Production Bootcamp
              </a>
            </h6>

            <ul className="flex flex-col justify-between list-disc mt-1 rounded-md">
              <li className="flex justify-between py-1.5 rounded-md">
                <span className="text-emerald-500 mr-1">$150</span>

                <span className="text-zinc-800 mb-2 mr-1">
                  4.0
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-amber-400 inline-block mx-1 -mt-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentViewsCourse;
