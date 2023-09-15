"use client";

import Title from "@/components/Common/Title";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import Blog from "../Blog";
import { blogs } from "../../../../../data/blogs";

const RelatedBlogs = () => {
  return (
    <div className="mt-10">
      <Title>You may also like</Title>
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
              {blogs.map((blog, idx) => (
                <SwiperSlide key={idx}>
                  <div className="py-6 px-3">
                    <Blog key={idx} blog={blog} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
