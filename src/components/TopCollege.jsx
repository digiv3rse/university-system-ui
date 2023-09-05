"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

const TopCollege = () => {
  return (
    <section id="college" className="mt-10 md:mt-20">
      <div className="text-zinc-500 flex flex-wrap text-[0.94rem] leading-5 mb-8">
        <div className="mx-auto px-3.5 text-center">
          <h2 className="text-zinc-800 text-[2.34rem] leading-none font-bold">Top Listed College</h2>

          <p>Perceived end knowledge certainly day sweetness why cordially.</p>
        </div>
      </div>

      {/* cards */}
      <div className="text-zinc-500 text-[0.94rem] leading-5 px-3.5 overflow-hidden">
        <div className="relative">
          <div className="bottom-[42.90rem] left-[-9375.00rem] absolute right-[9447.44rem] top-0">
            slide <span>7 to 11</span>
            {"  "}of 4
          </div>
          <div className="overflow-hidden">
            <div className="ml-1 -mr-7">
              <div>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  centeredSlides={true}
                  breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="inline-block pr-8 align-top">
                        <div className="mb-1 break-words border border-gray-100 border-solid rounded-lg">
                          <img
                            className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                            src="https://eduport.webestica.com/assets/images/university/04.jpg"
                            alt=""
                          />

                          <div className="text-zinc-500 flex-grow text-[0.94rem] leading-5 break-words py-4 px-5">
                            <div className="items-center flex justify-between mb-4 -mt-14">
                              <div className="bg-white rounded-md p-2">
                                <img
                                  className="!h-16 !w-12 align-middle rounded overflow-clip"
                                  src="https://eduport.webestica.com/assets/images/client/uni-logo-03.svg"
                                  alt=""
                                />
                              </div>

                              <div className="text-zinc-800 text-[1.31rem] leading-7 font-bold">
                                <a
                                  className="bg-emerald-500 text-white cursor-pointer inline-block text-[1.12rem] leading-6 py-1.5 px-3 text-center rounded-md"
                                  href="https://eduport.webestica.com/#"
                                >
                                  Admission Open
                                </a>
                              </div>
                            </div>

                            <div className="flex justify-between mb-4">
                              <span>
                                <a
                                  className="bg-zinc-800 text-white cursor-pointer inline-block text-[0.80rem] py-1 px-2 text-center rounded-md"
                                  href="https://eduport.webestica.com/#"
                                >
                                  Public
                                </a>
                              </span>

                              <ul className="items-center self-stretch flex">
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="orange"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-amber-400 inline-block"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="orange"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-amber-400 inline-block"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="orange"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-amber-400 inline-block"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="orange"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-amber-400 inline-block"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-amber-400 inline-block"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                  </svg>
                                </li>

                                <li className="text-zinc-800 ml-2">(4.5)</li>
                              </ul>
                            </div>

                            <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                              <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                                Indiana College of - Bloomington
                              </a>
                            </h5>

                            <ul className="text-zinc-800 flex flex-wrap mb-4 space-x-4">
                              <li className="align-middle">MBBS</li>

                              <li className="align-middle">Engineer</li>

                              <li className="align-middle">BBA</li>

                              <li className="align-middle">BCA</li>

                              <li className="align-middle">BSC</li>
                            </ul>

                            <div className="flex flex-wrap -ml-3.5 -mr-3.5 pl-3">
                              <div className="w-[50%]">
                                <ul className="flex flex-col list-disc rounded-md">
                                  <li className="rounded-tl-md rounded-tr-md py-1">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6 text-emerald-500 inline-block mr-1"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    Playground
                                  </li>

                                  <li className="py-1">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6 text-emerald-500 inline-block mr-1"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    Library
                                  </li>

                                  <li className="rounded-bl-md rounded-br-md py-1">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6 text-emerald-500 inline-block mr-1"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    Canteen
                                  </li>
                                </ul>
                              </div>

                              <div className="w-[50%]">
                                <ul className="flex flex-col list-disc rounded-md">
                                  <li className="rounded-tl-md rounded-tr-md py-1">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6 text-emerald-500 inline-block mr-1"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    Stationary
                                  </li>

                                  <li className="rounded-bl-md rounded-br-md py-1">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6 text-emerald-500 inline-block mr-1"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    Hostel
                                  </li>
                                </ul>
                              </div>

                              <div className="mt-4">
                                <a
                                  className="bg-sky-600/[0.1] text-sky-600 cursor-pointer inline-block font-medium mb-1.5 py-2 px-4 text-center align-middle border border-solid rounded-md overflow-hidden"
                                  href="https://eduport.webestica.com/#"
                                >
                                  View more
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCollege;
