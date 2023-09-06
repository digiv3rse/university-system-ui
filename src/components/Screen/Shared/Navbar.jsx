/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="hidden md:block">
      <div className="items-center text-zinc-500 flex text-[0.94rem] leading-5 justify-between px-3.5 container_fluid">
        <Link className="text-black cursor-pointer text-xl mr-4 py-8" href="/">
          <img className="h-9 w-36 align-middle overflow-clip" src="/logo.svg" alt="" />
        </Link>

        <div className="w-full items-center flex flex-grow">
          <ul className="flex mx-auto">
            <li className="list-item">
              <Link className="text-sky-600 cursor-pointer font-medium py-1 px-4" href="/courses">
                Course
              </Link>
            </li>

            <li className="list-item">
              <Link className="cursor-pointer font-medium py-1 px-4" href="/about">
                About
              </Link>
            </li>

            <li className="list-item">
              <Link className="cursor-pointer font-medium py-1 px-4" href="/accounts">
                Accounts
              </Link>
            </li>

            <li className="list-item">
              <Link className="cursor-pointer font-medium py-1 px-4" href="/components">
                Components
              </Link>
            </li>

            <li className="list-item">
              <Link className="cursor-pointer font-medium py-1 px-4" href="/">
                <i className="inline-block" />
              </Link>
            </li>
          </ul>

          <div className="items-center flex px-6">
            <div>
              <form className="relative">
                <input
                  className="w-full h-10 text-zinc-700 cursor-text py-2 pl-4 pr-12 border border-zinc-200 border-solid rounded-md"
                  placeholder="Search"
                  type="search"
                />

                <button className="items-start bottom-[-1.14rem] cursor-pointer left-[12.81rem] absolute right-0 text-center top-1/2 p-2">
                  <i className="inline-block" />
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
