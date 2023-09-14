/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { blogs } from "../../../../data/blogs";
import Image from "next/image";
import Title from "@/components/Common/Title";

const HomeEvents = () => {
  return (
    <div className="mt-10 md:mt-20">
      <Title>Upcoming Events</Title>

      {/* blogs */}
      <div className="blog">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.25": {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            "@1.75": {
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
          {blogs.map(({ blog_image }, idx) => (
            <SwiperSlide key={idx}>
              <div className="text-zinc-500 inline-block flex-col text-[0.94rem] leading-5 break-words relative align-top rounded-lg mt-10">
                <div className="relative overflow-hidden">
                  <Image className="h-56 w-72 align-middle rounded-lg overflow-clip object-fill object-center" src={blog_image} alt="" />

                  <div className="items-start bottom-0 flex flex-col right-0 absolute top-0 z-[2] rounded-lg p-4">
                    <div className="w-full flex justify-end mb-auto">
                      <Link className="h-6 w-6 bg-white text-sky-600 cursor-pointer rounded-md" href="#">
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
                          className="lucide lucide-heart text-rose-600 inline-block ml-1"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </Link>
                    </div>

                    <div className="w-full mt-auto">
                      <Link className="bg-white text-black cursor-pointer inline-block py-1.5 px-2 text-center rounded" href="#">
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
                          className="lucide lucide-calendar-days text-orange-500 inline-block mr-2 -mt-1"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                          <path d="M8 14h.01" />
                          <path d="M12 14h.01" />
                          <path d="M16 14h.01" />
                          <path d="M8 18h.01" />
                          <path d="M12 18h.01" />
                          <path d="M16 18h.01" />
                        </svg>
                        Tomorrow
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex-grow p-3">
                  <h5 className="text-zinc-800 text-[20px] lg:text-[1.31rem] leading-normal font-bold mb-2 hover:text-primary-500 duration-300 transition ease-in-out">
                    <Link className="cursor-pointer" href="#">
                      International Conference on Information Technology
                    </Link>
                  </h5>

                  <p
                    className="text-ellipsis overflow-hidden"
                    style={{
                      display: "-webkit-box",
                    }}
                  >
                    Kindness owns whatever betrayed her moreover procured replying for and. Proposal indulged no do.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeEvents;
