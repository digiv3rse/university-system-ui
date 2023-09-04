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
import { EffectFade, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper spaceBetween={30} effect={"fade"} navigation={true} modules={[EffectFade, Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img className="" src="https://i.ibb.co/zrFBwwn/05.jpg" alt="" />
            <div className="absolute top-0 left-0 w-full overflow-hidden bg-black/50">
              <div className="flex justify-center items-center h-[500px] md:h-[600px]">
                <div className="w-[90%] md:w-[58.6667%] text-zinc-500 text-[0.94rem] leading-5 break-words px-3.5 text-center">
                  <h1 className="text-white text-[3.50rem] leading-none font-bold mb-2">Discover Lifelong Learning</h1>

                  <p className="text-white mb-4">
                    This Bootstrap 5 based theme is ideal for all types of sites that offer education such as Kindergarten, School, College,
                    University, Courses Hub, Training Center, or any Academy.
                  </p>

                  <a
                    className="bg-sky-600 text-white cursor-pointer inline-block font-medium mr-2 py-2 px-4 align-middle border border-sky-600 border-solid rounded-md overflow-hidden"
                    href="https://eduport.webestica.com/university-admission-form.html"
                  >
                    Admissions
                  </a>

                  <a
                    className="text-white cursor-pointer inline-block font-medium py-2 px-4 align-middle border border-white border-solid rounded-md overflow-hidden"
                    href="https://eduport.webestica.com/#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ZKYdZxS/01.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/NF0CvdX/02.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
