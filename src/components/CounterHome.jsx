"use client";

import Image from "next/image";
import React from "react";
import countImg from "../assets/count.png";
import CountUp from "react-countup";

const CounterHome = () => {
  return (
    <section className="mt-10 md:mt-20">
      <div className="bg-[#F2AE30]/70 text-zinc-500 text-[0.94rem] leading-5 relative rounded-md p-12 ">
        <figure className="absolute right-0 top-0">
          <svg
            className="h-40 w-[42.25rem] inline opacity-20"
            fill="#D9B23D"
            height="161.3px"
            viewBox="0 0 676 161.3"
            width="676px"
            xmlSpace="preserve"
          >
            <path d="M53.6,18.8c28.6,8.8,50.3,27.3,70.9,48c19.9,19.9,39.5,40.8,65.3,53c53.3,24.9,116,12.4,168.2-9.1 c58.4-23.9,113.2-59.8,176.2-70.3c30.9-5.1,64.1-2.6,90.9,14.7c22.4,14.4,34.4,36.9,39.5,62.4c2.9,14.5,3.9,29.2,4.6,43.9h6.8 c-0.2-4.2-0.5-8.3-0.8-12.5c-1.7-24.1-4.9-49.1-17.6-70.3c-14.5-23.9-40-39.2-67-44.8c-32.9-6.8-67.2-0.3-98.5,10.2 c-30.3,10-59,24.2-87.7,38.1c-54.8,26.4-115.5,53.1-177.9,42c-14.5-2.6-28.7-7.4-41.7-14.7c-12.8-7.3-23.9-16.7-34.6-26.7 c-20.7-19.6-39.4-42-64.1-56.8c-25.6-15.4-56.4-22.2-86-19H0v6.9C17.9,11.8,36.3,13.5,53.6,18.8z" />
          </svg>
        </figure>

        <div className="flex flex-wrap">
          <div className="px-3.5 w-full">
            <div className="items-center flex flex-wrap justify-center lg:justify-between lg:pl-[14rem]">
              <div className="absolute bottom-0 left-10 z-10 hidden lg:block">
                <Image src={countImg} alt="" />
              </div>
              <div className="mt-4 px-2 text-center">
                <div className="flex justify-center">
                  <h4 className="text-white text-2xl md:text-[3.50rem] leading-none font-bold">
                    <CountUp start={40} end={89} duration={5} delay={2} />
                  </h4>
                </div>

                <h6 className="text-zinc-800 font-bold">Total Instructors</h6>
              </div>

              <div className="mt-4 px-2 text-center">
                <div className="flex justify-center">
                  <h4 className="text-white text-2xl md:text-[3.50rem] leading-none font-bold">
                    {" "}
                    <CountUp start={1} end={12} duration={5} delay={2} />
                  </h4>
                </div>

                <h6 className="text-zinc-800 font-bold">Total Campuses</h6>
              </div>

              <div className="mt-4 px-2 text-center">
                <div className="flex justify-center">
                  <h4 className="text-white text-2xl md:text-[3.50rem] leading-none font-bold">
                    {" "}
                    <CountUp start={35} end={180} duration={5} delay={2} />
                  </h4>

                  <span className="text-white text-2xl md:text-[3.50rem] leading-none font-bold">K</span>
                </div>

                <h6 className="text-zinc-800 font-bold">Students till date</h6>
              </div>

              <div className="mt-4 px-2 text-center">
                <div className="flex justify-center">
                  <h4 className="text-white text-2xl md:text-[3.50rem] leading-none font-bold">
                    {" "}
                    <CountUp start={2} end={23} duration={5} delay={2} />
                  </h4>

                  <span className="text-white text-2xl md:text-[3.50rem] leading-none font-bold">+</span>
                </div>

                <h6 className="text-zinc-800 font-bold">Types of Courses</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterHome;
