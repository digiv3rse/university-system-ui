/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 md:mt-20 bg-shark-50 pt-10">
      <div className="container_fluid">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-7 gap-6 md:gap-8 mb-8">
          <div className="text-zinc-500 text-[0.94rem] leading-5 px-3 lg:col-span-2">
            <a className="text-sky-600 cursor-pointer" href="/">
              <img className="h-10 w-48 align-middle overflow-clip" src="/logo.svg" alt="" />
            </a>

            <p className="my-4">
              Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.{" "}
            </p>
            <ul className="text-zinc-500 text-[0.94rem] leading-5">
              <li className="inline-block mr-2">
                {" "}
                <a
                  className="bg-white text-[#5D7CBE] cursor-pointer inline-block mb-1.5 py-1.5 px-2 align-middle border border-white border-solid rounded overflow-hidden"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>{" "}
              </li>

              <li className="inline-block mr-2">
                {" "}
                <a
                  className="bg-white text-pink-600 cursor-pointer inline-block mb-1.5 py-1.5 px-2 align-middle border border-white border-solid rounded overflow-hidden"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>{" "}
              </li>

              <li className="inline-block mr-2">
                {" "}
                <a
                  className="bg-white text-sky-400 cursor-pointer inline-block mb-1.5 py-1.5 px-2 align-middle border border-white border-solid rounded overflow-hidden"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>{" "}
              </li>

              <li className="inline-block">
                {" "}
                <a
                  className="bg-white text-sky-600 cursor-pointer inline-block mb-1.5 py-1.5 px-2 align-middle border border-white border-solid rounded overflow-hidden"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>{" "}
              </li>
            </ul>
          </div>

          {/* ====== */}
          <div className=" text-zinc-500 text-[0.94rem] leading-5 px-3">
            <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-6">Company</h5>

            <ul className="flex flex-col flex-wrap gap-y-3">
              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  About us
                </a>
              </li>

              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  Contact us
                </a>
              </li>

              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  News and Blogs
                </a>
              </li>

              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  Library
                </a>
              </li>

              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* ============== */}
          <div className=" text-zinc-500 text-[0.94rem] leading-5 px-3">
            <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-6">Community</h5>

            <ul className="flex flex-col flex-wrap gap-y-3">
              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  Documentation
                </a>
              </li>

              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  Faq
                </a>
              </li>

              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  Forum
                </a>
              </li>

              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* ==== */}
          <div className=" text-zinc-500 text-[0.94rem] leading-5 px-3 gap-y-3">
            <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-6">Teaching</h5>

            <ul className="flex flex-col flex-wrap gap-y-3">
              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  Become a teacher
                </a>
              </li>

              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  How to guide
                </a>
              </li>

              <li className="list-item">
                <a className="cursor-pointer py-1 pr-3" href="#">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* ==== */}
          <div className="text-zinc-500 text-[0.94rem] leading-5 px-3 lg:col-span-2">
            <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-6">Contact</h5>

            <p className="mb-2">
              Toll free:
              <span className="text-zinc-800 mb-2 ml-2">+1234 568 963</span> <br />
              <span className="text-[0.82rem]">(9:AM to 8:PM IST)</span>
            </p>

            <p>
              Email:
              <span className="text-zinc-800 mb-2 ml-2">example@gmail.com</span>
            </p>

            <div className="flex flex-wrap -ml-1 -mr-1 mt-2">
              <div className=" mt-2 px-1">
                <a className="text-sky-600 cursor-pointer" href="#">
                  {" "}
                  <img
                    className="h-11 w-36 align-middle overflow-clip"
                    src="https://eduport.webestica.com/assets/images/client/google-play.svg"
                    alt=""
                  />{" "}
                </a>
              </div>

              <div className=" mt-2 px-1">
                <a className="text-sky-600 cursor-pointer" href="#">
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
        <hr />
        <div className="text-zinc-500 text-[0.94rem] leading-5 py-5">
          <div>
            <div className="items-center flex justify-between py-4 text-center flex-col-reverse md:flex-row gap-y-3 md:gap-y-0">
              <div className="text-sm">
                {" "}
                Copyrights{" "}
                <a className="cursor-pointer" href="/">
                  ©2023 EduPort
                </a>
                . All rights reserved.{" "}
              </div>

              <div className="justify-center">
                <ul className="space-y-2 sm:space-y-0 sm:flex flex-wrap justify-center">
                  <li className="mr-2">
                    <div className="sm:text-right">
                      <a className="cursor-pointer py-1 pr-3 md:px-3" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe inline-block mr-2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" x2="22" y1="12" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Language
                      </a>
                    </div>
                  </li>

                  <li className="mr-2">
                    <a className="cursor-pointer py-1 px-3" href="#">
                      Terms of use
                    </a>
                  </li>

                  <li>
                    <a className="cursor-pointer py-1 sm:pl-3" href="#">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
