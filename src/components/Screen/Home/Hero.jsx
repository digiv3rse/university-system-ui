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
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="swiper_hero"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[450px] md:h-[500px] lg:h-[600px] object-cover object-center rounded-2xl"
              src="https://i.ibb.co/zrFBwwn/05.jpg"
              loading="lazy"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full overflow-hidden bg-black/50 rounded-2xl">
              <div className="flex justify-center items-center h-[450px] md:h-[500px] lg:h-[600px] ">
                <div className="w-full lg:w-[58.6667%] text-zinc-500 text-[0.94rem] leading-5 break-words px-3.5 text-center">
                  <h1 className="text-white text-3xl md:text-[44px] lg:text-[3.50rem] leading-none font-bold mb-2">Discover Lifelong Learning</h1>

                  <p className="text-white mb-4 leading-relaxed">
                    This Bootstrap 5 based theme is ideal for all types of sites that offer education such as Kindergarten, School, College,
                    University, Courses Hub, Training Center, or any Academy.
                  </p>

                  <Link
                    className="bg-sky-600 text-white cursor-pointer inline-block font-medium mr-2 py-2 px-4 align-middle border border-sky-600 border-solid rounded-md overflow-hidden"
                    href="/"
                  >
                    Admissions
                  </Link>

                  <Link
                    className="text-white cursor-pointer inline-block font-medium py-2 px-4 align-middle border border-white border-solid rounded-md overflow-hidden"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[450px] md:h-[500px] lg:h-[600px] object-cover object-center rounded-2xl"
              src="https://i.ibb.co/NF0CvdX/02.jpg"
              loading="lazy"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full overflow-hidden bg-black/50 rounded-2xl">
              <div className="flex justify-center items-center h-[450px] md:h-[500px] lg:h-[600px] ">
                <div className="w-full lg:w-[58.6667%] text-zinc-500 text-[0.94rem] leading-5 break-words px-3.5 text-center">
                  <h1 className="text-white text-3xl md:text-[44px] lg:text-[3.50rem] leading-none font-bold mb-2">Discover Lifelong Learning</h1>

                  <p className="text-white mb-4 leading-relaxed">
                    This Bootstrap 5 based theme is ideal for all types of sites that offer education such as Kindergarten, School, College,
                    University, Courses Hub, Training Center, or any Academy.
                  </p>

                  <Link
                    className="bg-sky-600 text-white cursor-pointer inline-block font-medium mr-2 py-2 px-4 align-middle border border-sky-600 border-solid rounded-md overflow-hidden"
                    href="/"
                  >
                    Admissions
                  </Link>

                  <Link
                    className="text-white cursor-pointer inline-block font-medium py-2 px-4 align-middle border border-white border-solid rounded-md overflow-hidden"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[450px] md:h-[500px] lg:h-[600px] object-cover object-center rounded-2xl"
              src="https://i.ibb.co/ZKYdZxS/01.jpg"
              loading="lazy"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full overflow-hidden bg-black/50 rounded-2xl">
              <div className="flex justify-center items-center h-[450px] md:h-[500px] lg:h-[600px] ">
                <div className="w-full lg:w-[58.6667%] text-zinc-500 text-[0.94rem] leading-5 break-words px-3.5 text-center">
                  <h1 className="text-white text-3xl md:text-[44px] lg:text-[3.50rem] leading-none font-bold mb-2">Discover Lifelong Learning</h1>

                  <p className="text-white mb-4 leading-relaxed">
                    This Bootstrap 5 based theme is ideal for all types of sites that offer education such as Kindergarten, School, College,
                    University, Courses Hub, Training Center, or any Academy.
                  </p>

                  <Link
                    className="bg-sky-600 text-white cursor-pointer inline-block font-medium mr-2 py-2 px-4 align-middle border border-sky-600 border-solid rounded-md overflow-hidden"
                    href="/"
                  >
                    Admissions
                  </Link>

                  <Link
                    className="text-white cursor-pointer inline-block font-medium py-2 px-4 align-middle border border-white border-solid rounded-md overflow-hidden"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
