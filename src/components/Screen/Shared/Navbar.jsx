/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="hidden lg:block">
      <div className="items-center text-zinc-500 flex text-[0.94rem] leading-5 justify-between px-3.5 container_fluid">
        <Link className="text-black cursor-pointer text-xl mr-4 py-8" href="/">
          <img className="h-9 w-36 align-middle overflow-clip" src="/logo.svg" alt="" />
        </Link>

        <div className="w-full items-center flex flex-grow">
          <ul className="flex mx-auto">
            <li className="list-item">
              <Link className="hover:text-sky-600 cursor-pointer font-medium py-1 px-4" href="/">
                Home
              </Link>
            </li>{" "}
            <li className="list-item">
              <Link className="hover:text-sky-600 cursor-pointer font-medium py-1 px-4" href="/courses">
                Course
              </Link>
            </li>
            <li className="list-item">
              <Link className="hover:text-sky-600 cursor-pointer font-medium py-1 px-4" href="/about">
                About
              </Link>
            </li>
            <li className="list-item">
              <Link className="hover:text-sky-600 cursor-pointer font-medium py-1 px-4" href="/instructors">
                Instructors
              </Link>
            </li>
            <li className="list-item">
              <Link className="hover:text-sky-600 cursor-pointer font-medium py-1 px-4" href="/contact">
                Contact
              </Link>
            </li>
            <li className="list-item">
              <Link className="hover:text-sky-600 cursor-pointer font-medium py-1 px-4" href="/signup">
                Sign Up
              </Link>
            </li>
          </ul>

          <div className="items-center hidden lg:flex px-6">
            <div>
              <form className="relative">
                <input
                  className="w-full h-10 text-zinc-700 cursor-text py-2 pl-4 pr-12 border border-zinc-200 border-solid rounded-md"
                  placeholder="Search"
                  type="search"
                />

                <button className="cursor-pointer p-2 absolute hidden lg:inline-block top-0 left-48">
                  <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block" width={24} height={24}>
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
                        stroke="#ccc"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path d="M17.029 16.5295L19.5 19.0005" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
                    </g>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div>
          <Link className="h-10 w-10 text-sky-600 cursor-pointer inline-block" href="/">
            <img
              className="h-full w-full object-cover align-middle rounded-full overflow-clip"
              src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
