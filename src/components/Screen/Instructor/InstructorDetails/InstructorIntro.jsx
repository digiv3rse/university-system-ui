"use client";
import Title from "@/components/Common/Title";
import React from "react";
import CountUp from "react-countup";

const InstructorIntro = () => {
  return (
    <section className="">
      <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">Hi, I am</h5>
      <Title>Lori Stevens</Title>
      <p className="text-zinc-500 text-[0.94rem] leading-5 mt-2">Graphic Designer</p>
      <div className="space-y-4 pt-8">
        {" "}
        <p className="text-zinc-500 text-[0.94rem] leading-5">
          Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered
          dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.
        </p>
        <p className="text-zinc-500 text-[0.94rem] leading-5">
          We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded
          Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the
          job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.
        </p>
      </div>

      {/* address */}
      <ul className="mt-6 space-y-2">
        <li className="rounded-tl-md rounded-tr-md text-zinc-500 text-[0.94rem] leading-5 py-1.5">
          <span className="text-zinc-800 mb-2 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-2">
              <path
                fill="#066ac9"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
              />
            </svg>
            Address:
          </span>

          <span className="mr-1">2002 Horton Ford Rd, Eidson, TN, 37731</span>
        </li>
        <li className="text-zinc-500 text-[0.94rem] leading-5 py-1.5">
          <span className="text-zinc-800 mb-2 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-2">
              <path
                fill="#066ac9"
                d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919L5.25 4h13.5h-13.5Z"
              />
            </svg>
            Email:
          </span>

          <span className="mr-1">example@gmail.com</span>
        </li>
        <li className="text-zinc-500 text-[0.94rem] leading-5 py-1.5">
          <span className="text-zinc-800 mb-2 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-2">
              <path
                fill="#066ac9"
                d="M4 12h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 1 0-16 0Z"
              />
            </svg>
            Phone number:
          </span>

          <span className="mr-1">+896-789-546</span>
        </li>
        <li className="rounded-bl-md rounded-br-md text-zinc-500 text-[0.94rem] leading-5 py-1.5">
          <span className="text-zinc-800 mb-2 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-2">
              <path
                fill="#066ac9"
                d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
              />
            </svg>
            Website:
          </span>

          <span className="mr-1">https://eduport.webestica.com/</span>
        </li>
      </ul>

      {/*  */}
      <section>
        <div className="text-zinc-500 flex flex-wrap justify-between text-[0.94rem] leading-5 mt-6">
          <div className="mt-4 px-2">
            <div className="items-center flex">
              <span className="h-14 w-14 bg-emerald-500/[0.1] text-emerald-500 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440Z"
                  />
                </svg>
              </span>

              <div className="ml-4">
                <div className="flex">
                  <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">
                    {" "}
                    <CountUp start={0} end={10} duration={5} delay={2} />
                  </h5>

                  <span className="text-zinc-800 text-[1.31rem] leading-7 font-bold">+</span>
                </div>

                <p className="text-zinc-800">Total Courses</p>
              </div>
            </div>
          </div>

          <div className="mt-4 px-2">
            <div className="items-center flex">
              <span className="h-14 w-14 bg-violet-700/[0.1] text-violet-700 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512">
                  <path
                    fill="currentColor"
                    d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                  />
                </svg>
              </span>

              <div className="ml-4">
                <div className="flex">
                  <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">
                    {" "}
                    <CountUp start={0} end={36} duration={5} delay={2} />
                  </h5>

                  <span className="text-zinc-800 text-[1.31rem] leading-7 font-bold">K+</span>
                </div>

                <p className="text-zinc-800">Total Students</p>
              </div>
            </div>
          </div>

          <div className="mt-4 px-2">
            <div className="items-center flex">
              <span className="h-14 w-14 bg-orange-500/[0.1] text-orange-500 rounded-lg flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M464 80h-60.1a4 4 0 0 1-4-4V63.92a32 32 0 0 0-32-31.92l-223.79.26a32 32 0 0 0-31.94 31.93V76a4 4 0 0 1-4 4H48a16 16 0 0 0-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 0 1 5.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61c20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 0 1 6.25 7.8V444a4 4 0 0 1-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 448h-60a4 4 0 0 1-4-4v-86.86a8 8 0 0 1 6.25-7.8c22.42-5 47.36-16.65 68.27-32.48c27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 0 1 5.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 0 0-16-16ZM112 198.22a4 4 0 0 1-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89c-11.91-17.69-19-40.67-19.79-63.63a4 4 0 0 1 4-4.15h40a4 4 0 0 1 4 4c-.02 27.45-.07 58.87-.07 82.22Zm316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 0 1-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4.15c-.79 22.96-7.9 45.94-19.81 63.63Z"
                  />
                </svg>
              </span>

              <div className="ml-4">
                <div className="flex">
                  <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">
                    {" "}
                    <CountUp start={0} end={11} duration={5} delay={2} />
                  </h5>

                  <span className="text-zinc-800 text-[1.31rem] leading-7 font-bold">+</span>
                </div>

                <p className="text-zinc-800">Years in Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default InstructorIntro;
