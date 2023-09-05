"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper/modules";

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
                <Swiper spaceBetween={30} slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <div className="inline-block pr-8 align-top">
                      <div className="flex flex-col mb-1 break-words border border-gray-100 border-solid rounded-lg">
                        <img
                          className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                          src="https://eduport.webestica.com/assets/images/university/04.jpg"
                          alt=""
                        />

                        <div className="flex-grow py-4 px-5">
                          <div className="items-center flex justify-between mb-4 -mt-14">
                            <div className="bg-white rounded-md p-2">
                              <img
                                className="h-16 w-12 align-middle rounded overflow-clip"
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
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li className="text-zinc-800 ml-2">(4.5)</li>
                            </ul>
                          </div>

                          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                              Indiana College of - Bloomington
                            </a>
                          </h5>

                          <p className="mb-4">
                            <i className="inline-block mr-2" /> Bloomington, IN{" "}
                          </p>

                          <ul className="text-zinc-800 flex flex-wrap mb-4">
                            <li className="align-middle">MBBS</li>

                            <li className="align-middle">Engineer</li>

                            <li className="align-middle">BBA</li>

                            <li className="align-middle">BCA</li>

                            <li className="align-middle">BSC</li>
                          </ul>

                          <div className="flex flex-wrap -ml-3.5 -mr-3.5">
                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Playground
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Library
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Canteen
                                </li>
                              </ul>
                            </div>

                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Stationary
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Hostel
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 px-3.5">
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
                  <SwiperSlide>
                    <div className="inline-block pr-8 align-top">
                      <div className="flex flex-col mb-1 break-words border border-gray-100 border-solid rounded-lg">
                        <img
                          className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                          src="https://eduport.webestica.com/assets/images/university/01.jpg"
                          alt=""
                        />

                        <div className="flex-grow py-4 px-5">
                          <div className="items-center flex justify-between mb-4 -mt-14">
                            <div className="bg-white rounded-md p-2">
                              <img
                                className="h-16 w-14 align-middle rounded overflow-clip"
                                src="https://eduport.webestica.com/assets/images/client/uni-logo-02.svg"
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
                                Private
                              </a>
                            </span>

                            <ul className="items-center self-stretch flex">
                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li className="text-zinc-800 ml-2">(4.0)</li>
                            </ul>
                          </div>

                          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                              College of South Florida
                            </a>
                          </h5>

                          <p className="mb-4">
                            <i className="inline-block mr-2" /> 4653 Linda Street Newark, PA{" "}
                          </p>

                          <ul className="text-zinc-800 flex flex-wrap mb-4">
                            <li className="align-middle">BBA</li>

                            <li className="align-middle">BCA</li>

                            <li className="align-middle">BSC</li>

                            <li className="align-middle">Engineer</li>
                          </ul>

                          <div className="flex flex-wrap -ml-3.5 -mr-3.5">
                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Gym
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Stationary
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Playground
                                </li>
                              </ul>
                            </div>

                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Canteen
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Library
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Hostel
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 px-3.5">
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
                  <SwiperSlide>
                    {" "}
                    <div className="inline-block pr-8 align-top">
                      <div className="flex flex-col mb-1 break-words border border-gray-100 border-solid rounded-lg">
                        <img
                          className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                          src="https://eduport.webestica.com/assets/images/university/03.jpg"
                          alt=""
                        />

                        <div className="flex-grow py-4 px-5">
                          <div className="items-center flex justify-between mb-4 -mt-14">
                            <div className="bg-white rounded-md p-2">
                              <img
                                className="h-16 w-14 align-middle rounded overflow-clip"
                                src="https://eduport.webestica.com/assets/images/client/uni-logo-01.svg"
                                alt=""
                              />
                            </div>

                            <div className="text-zinc-800 text-[1.31rem] leading-7 font-bold">
                              <a
                                className="bg-rose-600 text-white cursor-pointer inline-block text-[1.12rem] leading-6 py-1.5 px-3 text-center rounded-md"
                                href="https://eduport.webestica.com/#"
                              >
                                Admission Closed
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
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li className="text-zinc-800 ml-2">(4.5)</li>
                            </ul>
                          </div>

                          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                              Andeerson Campus
                            </a>
                          </h5>

                          <p className="mb-4">
                            <i className="inline-block mr-2" /> 4502 Colonial Drive Andeerson, IN{" "}
                          </p>

                          <ul className="text-zinc-800 flex flex-wrap mb-4">
                            <li className="align-middle">Engineer</li>

                            <li className="align-middle">BBA</li>

                            <li className="align-middle">BCA</li>

                            <li className="align-middle">BSC</li>

                            <li className="align-middle">MBBS</li>
                          </ul>

                          <div className="flex flex-wrap -ml-3.5 -mr-3.5">
                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Library
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Canteen
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Stationary
                                </li>
                              </ul>
                            </div>

                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Hostel
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Playground
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 px-3.5">
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
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    {" "}
                    <div className="inline-block pr-8 align-top">
                      <div className="flex flex-col mb-1 break-words border border-gray-100 border-solid rounded-lg">
                        <img
                          className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                          src="https://eduport.webestica.com/assets/images/university/02.jpg"
                          alt=""
                        />

                        <div className="flex-grow py-4 px-5">
                          <div className="items-center flex justify-between mb-4 -mt-14">
                            <div className="bg-white rounded-md p-2">
                              <img
                                className="h-16 w-14 align-middle rounded overflow-clip"
                                src="https://eduport.webestica.com/assets/images/client/uni-logo-01.svg"
                                alt=""
                              />
                            </div>

                            <div className="text-zinc-800 text-[1.31rem] leading-7 font-bold">
                              <a
                                className="bg-rose-600 text-white cursor-pointer inline-block text-[1.12rem] leading-6 py-1.5 px-3 text-center rounded-md"
                                href="https://eduport.webestica.com/#"
                              >
                                Admission Closed
                              </a>
                            </div>
                          </div>

                          <div className="flex justify-between mb-4">
                            <span>
                              <a
                                className="bg-zinc-800 text-white cursor-pointer inline-block text-[0.80rem] py-1 px-2 text-center rounded-md"
                                href="https://eduport.webestica.com/#"
                              >
                                Private
                              </a>
                            </span>

                            <ul className="items-center self-stretch flex">
                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li className="text-zinc-800 ml-2">(4.5)</li>
                            </ul>
                          </div>

                          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                              American Century University, New Mexico
                            </a>
                          </h5>

                          <p className="mb-4">
                            <i className="inline-block mr-2" />
                            4502 Colonial Drive Andeerson, IN{" "}
                          </p>

                          <ul className="text-zinc-800 flex flex-wrap mb-4">
                            <li className="align-middle">BSC</li>

                            <li className="align-middle">BBA</li>

                            <li className="align-middle">Engineer</li>

                            <li className="align-middle">BCA</li>

                            <li className="align-middle">MBBS</li>
                          </ul>

                          <div className="flex flex-wrap -ml-3.5 -mr-3.5">
                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Canteen
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Stationary
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Hostel
                                </li>
                              </ul>
                            </div>

                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Library
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Playground
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 px-3.5">
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
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    {" "}
                    <div className="inline-block pr-8 align-top">
                      <div className="flex flex-col mb-1 break-words border border-gray-100 border-solid rounded-lg">
                        <img
                          className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                          src="https://eduport.webestica.com/assets/images/university/04.jpg"
                          alt=""
                        />

                        <div className="flex-grow py-4 px-5">
                          <div className="items-center flex justify-between mb-4 -mt-14">
                            <div className="bg-white rounded-md p-2">
                              <img
                                className="h-16 w-12 align-middle rounded overflow-clip"
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
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li className="text-zinc-800 ml-2">(4.5)</li>
                            </ul>
                          </div>

                          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                              Indiana College of - Bloomington
                            </a>
                          </h5>

                          <p className="mb-4">
                            <i className="inline-block mr-2" /> Bloomington, IN{" "}
                          </p>

                          <ul className="text-zinc-800 flex flex-wrap mb-4">
                            <li className="align-middle">MBBS</li>

                            <li className="align-middle">Engineer</li>

                            <li className="align-middle">BBA</li>

                            <li className="align-middle">BCA</li>

                            <li className="align-middle">BSC</li>
                          </ul>

                          <div className="flex flex-wrap -ml-3.5 -mr-3.5">
                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Playground
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Library
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Canteen
                                </li>
                              </ul>
                            </div>

                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Stationary
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Hostel
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 px-3.5">
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
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    {" "}
                    <div className="inline-block pr-8 align-top">
                      <div className="flex flex-col mb-1 break-words border border-gray-100 border-solid rounded-lg">
                        <img
                          className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                          src="https://eduport.webestica.com/assets/images/university/01.jpg"
                          alt=""
                        />

                        <div className="flex-grow py-4 px-5">
                          <div className="items-center flex justify-between mb-4 -mt-14">
                            <div className="bg-white rounded-md p-2">
                              <img
                                className="h-16 w-14 align-middle rounded overflow-clip"
                                src="https://eduport.webestica.com/assets/images/client/uni-logo-02.svg"
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
                                Private
                              </a>
                            </span>

                            <ul className="items-center self-stretch flex">
                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li className="text-zinc-800 ml-2">(4.0)</li>
                            </ul>
                          </div>

                          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                              College of South Florida
                            </a>
                          </h5>

                          <p className="mb-4">
                            <i className="inline-block mr-2" /> 4653 Linda Street Newark, PA{" "}
                          </p>

                          <ul className="text-zinc-800 flex flex-wrap mb-4">
                            <li className="align-middle">BBA</li>

                            <li className="align-middle">BCA</li>

                            <li className="align-middle">BSC</li>

                            <li className="align-middle">Engineer</li>
                          </ul>

                          <div className="flex flex-wrap -ml-3.5 -mr-3.5">
                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Gym
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Stationary
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Playground
                                </li>
                              </ul>
                            </div>

                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Canteen
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Library
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Hostel
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 px-3.5">
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
                  <SwiperSlide>
                    {" "}
                    <div className="inline-block pr-8 align-top">
                      <div className="flex flex-col mb-1 break-words border border-gray-100 border-solid rounded-lg">
                        <img
                          className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                          src="https://eduport.webestica.com/assets/images/university/03.jpg"
                          alt=""
                        />

                        <div className="flex-grow py-4 px-5">
                          <div className="items-center flex justify-between mb-4 -mt-14">
                            <div className="bg-white rounded-md p-2">
                              <img
                                className="h-16 w-14 align-middle rounded overflow-clip"
                                src="https://eduport.webestica.com/assets/images/client/uni-logo-01.svg"
                                alt=""
                              />
                            </div>

                            <div className="text-zinc-800 text-[1.31rem] leading-7 font-bold">
                              <a
                                className="bg-rose-600 text-white cursor-pointer inline-block text-[1.12rem] leading-6 py-1.5 px-3 text-center rounded-md"
                                href="https://eduport.webestica.com/#"
                              >
                                Admission Closed
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
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li className="text-zinc-800 ml-2">(4.5)</li>
                            </ul>
                          </div>

                          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                              Andeerson Campus
                            </a>
                          </h5>

                          <p className="mb-4">
                            <i className="inline-block mr-2" /> 4502 Colonial Drive Andeerson, IN{" "}
                          </p>

                          <ul className="text-zinc-800 flex flex-wrap mb-4">
                            <li className="align-middle">Engineer</li>

                            <li className="align-middle">BBA</li>

                            <li className="align-middle">BCA</li>

                            <li className="align-middle">BSC</li>

                            <li className="align-middle">MBBS</li>
                          </ul>

                          <div className="flex flex-wrap -ml-3.5 -mr-3.5">
                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Library
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Canteen
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Stationary
                                </li>
                              </ul>
                            </div>

                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Hostel
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Playground
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 px-3.5">
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
                  <SwiperSlide>
                    {" "}
                    <div className="inline-block pr-8 align-top">
                      <div className="flex flex-col mb-1 break-words border border-gray-100 border-solid rounded-lg">
                        <img
                          className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                          src="https://eduport.webestica.com/assets/images/university/02.jpg"
                          alt=""
                        />

                        <div className="flex-grow py-4 px-5">
                          <div className="items-center flex justify-between mb-4 -mt-14">
                            <div className="bg-white rounded-md p-2">
                              <img
                                className="h-16 w-14 align-middle rounded overflow-clip"
                                src="https://eduport.webestica.com/assets/images/client/uni-logo-01.svg"
                                alt=""
                              />
                            </div>

                            <div className="text-zinc-800 text-[1.31rem] leading-7 font-bold">
                              <a
                                className="bg-rose-600 text-white cursor-pointer inline-block text-[1.12rem] leading-6 py-1.5 px-3 text-center rounded-md"
                                href="https://eduport.webestica.com/#"
                              >
                                Admission Closed
                              </a>
                            </div>
                          </div>

                          <div className="flex justify-between mb-4">
                            <span>
                              <a
                                className="bg-zinc-800 text-white cursor-pointer inline-block text-[0.80rem] py-1 px-2 text-center rounded-md"
                                href="https://eduport.webestica.com/#"
                              >
                                Private
                              </a>
                            </span>

                            <ul className="items-center self-stretch flex">
                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li className="text-zinc-800 ml-2">(4.5)</li>
                            </ul>
                          </div>

                          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                              American Century University, New Mexico
                            </a>
                          </h5>

                          <p className="mb-4">
                            <i className="inline-block mr-2" />
                            4502 Colonial Drive Andeerson, IN{" "}
                          </p>

                          <ul className="text-zinc-800 flex flex-wrap mb-4">
                            <li className="align-middle">BSC</li>

                            <li className="align-middle">BBA</li>

                            <li className="align-middle">Engineer</li>

                            <li className="align-middle">BCA</li>

                            <li className="align-middle">MBBS</li>
                          </ul>

                          <div className="flex flex-wrap -ml-3.5 -mr-3.5">
                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Canteen
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Stationary
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Hostel
                                </li>
                              </ul>
                            </div>

                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Library
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Playground
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 px-3.5">
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
                  <SwiperSlide>
                    {" "}
                    <div className="inline-block pr-8 align-top">
                      <div className="flex flex-col mb-1 break-words border border-gray-100 border-solid rounded-lg">
                        <img
                          className="h-72 w-96 rounded-tl-lg rounded-tr-lg align-middle overflow-clip"
                          src="https://eduport.webestica.com/assets/images/university/01.jpg"
                          alt=""
                        />

                        <div className="flex-grow py-4 px-5">
                          <div className="items-center flex justify-between mb-4 -mt-14">
                            <div className="bg-white rounded-md p-2">
                              <img
                                className="h-16 w-14 align-middle rounded overflow-clip"
                                src="https://eduport.webestica.com/assets/images/client/uni-logo-02.svg"
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
                                Private
                              </a>
                            </span>

                            <ul className="items-center self-stretch flex">
                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li>
                                <i className="text-amber-400 inline-block" />
                              </li>

                              <li className="text-zinc-800 ml-2">(4.0)</li>
                            </ul>
                          </div>

                          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">
                            <a className="cursor-pointer" href="https://eduport.webestica.com/#">
                              College of South Florida
                            </a>
                          </h5>

                          <p className="mb-4">
                            <i className="inline-block mr-2" /> 4653 Linda Street Newark, PA{" "}
                          </p>

                          <ul className="text-zinc-800 flex flex-wrap mb-4">
                            <li className="align-middle">BBA</li>

                            <li className="align-middle">BCA</li>

                            <li className="align-middle">BSC</li>

                            <li className="align-middle">Engineer</li>
                          </ul>

                          <div className="flex flex-wrap -ml-3.5 -mr-3.5">
                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Gym
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Stationary
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Playground
                                </li>
                              </ul>
                            </div>

                            <div className="w-[50%] px-3.5">
                              <ul className="flex flex-col list-disc rounded-md">
                                <li className="rounded-tl-md rounded-tr-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Canteen
                                </li>

                                <li className="py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Library
                                </li>

                                <li className="rounded-bl-md rounded-br-md py-1">
                                  {" "}
                                  <i className="w-5 text-emerald-500 inline-block mr-1" />
                                  Hostel
                                </li>
                              </ul>
                            </div>

                            <div className="mt-4 px-3.5">
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
