"use client";
import Title from "@/components/Common/Title";
import React from "react";
import InstructorAbout from "@/components/Screen/Instructor/InstructorDetails/InstructorAbout";
import InstructorImage from "@/components/Screen/Instructor/InstructorDetails/InstructorImage";
import InstructorIntro from "@/components/Screen/Instructor/InstructorDetails/InstructorIntro";
import InstructorCourses from "@/components/Screen/Instructor/InstructorDetails/InstructorCourses";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import RelatedInstructors from "@/components/Screen/Instructor/InstructorDetails/RelatedInstructors";
import { instructorsDetail } from "../../../../data/instructors";

const InstructorDetailsPage = () => {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-8">
        <div className="space-y-8 md:space-y-0 lg:space-y-8 grid grid-cols-1 md:grid-cols-2 lg:block gap-6">
          <InstructorImage />
          <InstructorAbout />
        </div>
        <div className="lg:col-span-2">
          <InstructorIntro />
          <div className="mt-10 md:mt-20">
            <Title>Courses List</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-10">
              {Array.from({ length: 4 }).map((_, idx) => (
                <InstructorCourses key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ============================== related course instructor */}
      <section className="mt-10 md:mt-20">
        <Title>Related Instructors</Title>
        <div className="mt-10">
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
            {instructorsDetail.map((instructor, idx) => (
              <SwiperSlide key={idx}>
                <RelatedInstructors instructor={instructor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default InstructorDetailsPage;
