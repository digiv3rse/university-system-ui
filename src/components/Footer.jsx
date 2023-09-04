/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 md:mt-20 bg-shark-50 py-10">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 container_fluid">
        <div className="text-zinc-500 text-[0.94rem] leading-5 px-3">
          <a className="text-sky-600 cursor-pointer" href="/">
            <img className="h-10 w-48 align-middle overflow-clip" src="/logo.svg" alt="" />
          </a>

          <p className="my-4">
            Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.{" "}
          </p>
        </div>

        {/* ====== */}
        <div className="w-[50%] text-zinc-500 text-[0.94rem] leading-5 px-3">
          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-6">Company</h5>

          <ul className="flex flex-col flex-wrap">
            <li className="list-item">
              <a className="cursor-pointer py-1 pr-3" href="https://eduport.webestica.com/#">
                About us
              </a>
            </li>

            <li className="list-item">
              <a className="cursor-pointer py-1 pr-3" href="https://eduport.webestica.com/#">
                Contact us
              </a>
            </li>

            <li className="list-item">
              <a className="cursor-pointer py-1 pr-3" href="https://eduport.webestica.com/#">
                News and Blogs
              </a>
            </li>

            <li className="list-item">
              <a className="cursor-pointer py-1 pr-3" href="https://eduport.webestica.com/#">
                Library
              </a>
            </li>

            <li className="list-item">
              <a className="cursor-pointer py-1 pr-3" href="https://eduport.webestica.com/#">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* ==== */}
        <div className="w-[50%] text-zinc-500 text-[0.94rem] leading-5 px-3">
          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-6">Teaching</h5>

          <ul className="flex flex-col flex-wrap">
            <li className="list-item">
              <a className="cursor-pointer py-1 pr-3" href="https://eduport.webestica.com/#">
                Become a teacher
              </a>
            </li>

            <li className="list-item">
              <a className="cursor-pointer py-1 pr-3" href="https://eduport.webestica.com/#">
                How to guide
              </a>
            </li>

            <li className="list-item">
              <a className="cursor-pointer py-1 pr-3" href="https://eduport.webestica.com/#">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        {/* ==== */}
        <div className="text-zinc-500 text-[0.94rem] leading-5 px-3">
          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-6">Contact</h5>

          <p className="mb-2">
            Toll free:
            <span className="text-zinc-800 mb-2 ml-2">+1234 568 963</span>
            <span className="text-[0.82rem]">(9:AM to 8:PM IST)</span>
          </p>

          <p>
            Email:
            <span className="text-zinc-800 mb-2 ml-2">example@gmail.com</span>
          </p>

          <div className="flex flex-wrap -ml-1 -mr-1 mt-2">
            <div className="w-[50%] mt-2 px-1">
              <a className="text-sky-600 cursor-pointer" href="https://eduport.webestica.com/#">
                {" "}
                <img
                  className="h-11 w-36 align-middle overflow-clip"
                  src="https://eduport.webestica.com/assets/images/client/google-play.svg"
                  alt=""
                />{" "}
              </a>
            </div>

            <div className="w-[50%] mt-2 px-1">
              <a className="text-sky-600 cursor-pointer" href="https://eduport.webestica.com/#">
                {" "}
                <img
                  className="h-11 w-36 align-middle overflow-clip"
                  src="https://eduport.webestica.com/assets/images/client/app-store.svg"
                  alt=""
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
