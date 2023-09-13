"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Title from "@/components/Common/Title";
import { courses } from "../../../../data/coursesData";
import CourseList from "../Courses/CourseList";

const TopCollege = () => {
  return (
    <section id="college" className="mt-10 md:mt-20">
      <div className="items-center text-zinc-500 md:flex space-y-3 md:space-y-0 text-[0.94rem] leading-5 justify-between">
        <Title>Top Listed Courses</Title>

        <div>
          <span className="mr-2">Want to see more?</span>

          <Link
            className="bg-sky-600/[0.1] text-sky-600 hover:text-white hover:bg-primary-400 cursor-pointer inline-block text-[0.81rem] font-medium py-1.5 px-3 text-center align-middle border border-solid rounded overflow-hidden "
            href="/courses"
          >
            Go here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              className="lucide lucide-chevron-right inline-block ml-1 -mt-0.5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* cards */}
      <div className="text-zinc-500 text-[0.94rem] leading-5 overflow-hidden mt-5">
        <div className="relative">
          <div className="bottom-[42.90rem] left-[-9375.00rem] absolute right-[9447.44rem] top-0">
            slide <span>7 to 11</span>
            {"  "}of 4
          </div>
          <div className="overflow-hidden">
            <div className="">
              <div>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
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
                    "@1.75": {
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
                  {courses.map((course, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="py-6 px-3">
                        <CourseList key={idx} course={course} />
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
