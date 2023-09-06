"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="block md:hidden relative">
      <div className="items-center text-zinc-500 flex text-[0.94rem] leading-5 justify-between px-3.5 container_fluid">
        <a className="text-black cursor-pointer text-xl mr-4 py-8" href="/">
          <img className="h-9 w-36 align-middle overflow-clip" src="/logo.svg" alt="" />
        </a>
        <div className="flex items-center space-x-4">
          {!menuOpen ? (
            <button onClick={() => setMenuOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          ) : (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          {/* =========== */}
          <a className="h-10 w-10 text-sky-600 cursor-pointer inline-block" href="/">
            <img
              className="h-full w-full object-cover align-middle rounded-full overflow-clip"
              src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full h-screen bg-white p-5 z-10">
          <ul className="flex mx-auto flex-col space-y-3">
            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item">
              <a className="text-sky-600 cursor-pointer font-medium py-1 px-4" href="/courses">
                Course
              </a>
            </li>

            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item">
              <a className="cursor-pointer font-medium py-1 px-4" href="/about">
                About
              </a>
            </li>

            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item">
              <a className="cursor-pointer font-medium py-1 px-4" href="/accounts">
                Accounts
              </a>
            </li>

            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item">
              <a className="cursor-pointer font-medium py-1 px-4" href="/components">
                Components
              </a>
            </li>

            <li onClick={() => setMenuOpen(!menuOpen)} className="list-item">
              <a className="cursor-pointer font-medium py-1 px-4" href="/">
                <i className="inline-block" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Menu;
