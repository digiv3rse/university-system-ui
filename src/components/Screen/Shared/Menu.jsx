"use client";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="block lg:hidden relative">
      <div className="items-center text-zinc-500 flex text-[0.94rem] leading-5 justify-between px-3.5 container_fluid">
        <Link className="text-black cursor-pointer text-xl mr-4 py-8" href="/">
          <img className="h-9 w-36 align-middle overflow-clip" src="/logo.svg" alt="" />
        </Link>
        <div className="flex items-center space-x-4">
          {!menuOpen ? (
            <button onClick={() => setMenuOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          ) : (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          {/* =========== */}
          <Link className="h-10 w-10 text-sky-600 cursor-pointer inline-block" href="/">
            <img
              className="h-full w-full object-cover align-middle rounded-full overflow-clip"
              src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className=" w-full h-full bg-white mb-5 z-[999] border-t container_fluid">
          <ul className="flex mx-auto flex-col ">
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2 border-b border-primary-50">
              <Link className="cursor-pointer font-medium py-2 align-middle px-4 " href="/">
                Home
              </Link>
            </li>{" "}
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2 border-b border-primary-50">
              <Link className="cursor-pointer font-medium py-2 align-middle px-4 " href="/courses">
                Courses
              </Link>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2 border-b border-primary-50">
              <Link className="cursor-pointer font-medium py-2 align-middle px-4 " href="/about">
                About
              </Link>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2 border-b border-primary-50">
              <Link className="cursor-pointer font-medium py-2 align-middle px-4 " href="/instructors">
                Instructors
              </Link>
            </li>{" "}
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2 border-b border-primary-50">
              <Link className="cursor-pointer font-medium py-2 align-middle px-4 " href="/category">
                Categories
              </Link>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2 border-b border-primary-50">
              <Link className="cursor-pointer font-medium py-2 align-middle px-4 " href="/event">
                Events
              </Link>
            </li>{" "}
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2 border-b border-primary-50">
              <Link className="cursor-pointer font-medium py-2 align-middle px-4 " href="/blog">
                Blogs
              </Link>
            </li>{" "}
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2 border-b border-primary-50">
              <Link className="cursor-pointer font-medium py-2 align-middle px-4 " href="/instructors">
                404
              </Link>
            </li>
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2 border-b border-primary-50">
              <Link className="cursor-pointer font-medium py-2 align-middle px-4 " href="/contact">
                Contact
              </Link>
            </li>
            <div onClick={() => setMenuOpen(!menuOpen)} className="list-item py-2">
              <form className="relative w-full cursor-pointer font-medium py-2 align-middle px-4">
                <input
                  className="w-full h-10 text-zinc-700 cursor-text py-2 pl-4 pr-12 border border-zinc-200 border-solid rounded-md"
                  placeholder="Search"
                  type="search"
                />
              </form>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Menu;
