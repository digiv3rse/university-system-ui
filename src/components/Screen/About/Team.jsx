"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
        <div className="lg:col-span-2">
          <div className="text-zinc-500 text-[0.94rem] leading-5">
            <h2 className="text-zinc-800 text-[2.34rem] leading-none font-bold my-2">Awards&apos;N Stuff</h2>

            <ul className="flex flex-col list-disc mt-8 rounded-md px-3">
              <li className="items-center rounded-tl-md rounded-tr-md flex py-1.5">
                <h6 className="text-zinc-800 font-bold">2015</h6>

                <span className="ml-4 mr-1">Heroes for Children award</span>
              </li>

              <li className="items-center flex py-1.5">
                <h6 className="text-zinc-800 font-bold">2016</h6>

                <span className="ml-4 mr-1">Education Agency of the Year</span>
              </li>

              <li className="items-center flex py-1.5">
                <h6 className="text-zinc-800 font-bold">2017</h6>

                <span className="ml-4 mr-1">National Teacher of the Year</span>
              </li>

              <li className="items-center flex py-1.5">
                <h6 className="text-zinc-800 font-bold">2018</h6>

                <span className="ml-4 mr-1">Best education agency 2018</span>
              </li>

              <li className="items-center flex py-1.5">
                <h6 className="text-zinc-800 font-bold">2019</h6>

                <span className="ml-4 mr-1">Teacher of the nation (2nd place)</span>
              </li>

              <li className="items-center rounded-bl-md rounded-br-md flex py-1.5">
                <h6 className="text-zinc-800 font-bold">2020</h6>

                <span className="ml-4 mr-1">Best Independent Education Agency</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="text-zinc-500 text-[0.94rem] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <h2 className="text-zinc-800 text-[2.34rem] leading-none font-bold">Meet Our Team</h2>

            <Link
              className="bg-slate-100 text-zinc-950 cursor-pointer font-medium mb-1.5 mt-4 py-2 px-4 text-center align-middle border border-slate-100 border-solid rounded-md overflow-hidden hover:bg-slate-300 duration-300 transition"
              href="#"
            >
              Join Team
            </Link>
          </div>

          {/* ===================== */}

          <div className="mt-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              loop={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
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
              {Array.from({ length: 9 }).map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="text-zinc-500 text-[0.94rem] leading-5  text-center align-top">
                    <div className="h-32 w-32 inline-block mb-4">
                      <img
                        className="h-full w-full object-cover align-middle rounded-full overflow-clip"
                        src="https://eduport.webestica.com/assets/images/avatar/04.jpg"
                        alt=""
                      />
                    </div>

                    <h6 className="text-zinc-800 font-bold">
                      <a className="cursor-pointer" href="#">
                        Larry Lawson
                      </a>
                    </h6>

                    <p className="text-[0.82rem]">Designer</p>

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

                      {/* <li className="text-zinc-800 ml-2">(4.5)</li> */}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ===================== */}
        </div>
      </div>
    </div>
  );
};

export default Team;
