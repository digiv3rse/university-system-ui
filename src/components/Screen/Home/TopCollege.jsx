"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { topColleges } from "../../../../data/topColleges";
import Image from "next/image";
import Title from "@/components/Common/Title";
import { courses } from "../../../../data/coursesData";
import CourseList from "../Courses/CourseList";

const TopCollege = () => {
  return (
    <section id="college" className="mt-10 md:mt-20">
      <div className="text-zinc-500 flex flex-wrap text-[0.94rem] leading-5 mb-8">
        <div className="mx-auto lg:px-3.5 text-center">
          <Title>Top Listed Course</Title>

          <p>Perceived end knowledge certainly day sweetness why cordially.</p>
        </div>
      </div>

      {/* cards */}
      <div className="text-zinc-500 text-[0.94rem] leading-5 overflow-hidden">
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
