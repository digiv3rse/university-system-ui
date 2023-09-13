import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="bg-[#F5F7F9] text-zinc-500 text-[0.94rem] leading-5 text-center rounded-lg p-[25.600px]">
        <h2 className="text-black text-[25px] md:text-[45px] leading-none font-bold">Courses list</h2>

        <div className="flex justify-center">
          <div>
            <ol className="flex flex-wrap text-[0.81rem] py-2 space-x-3">
              <li className="list-item">
                <Link className=" cursor-pointer hover:text-primary-500 duration-300 transition" href="/">
                  Home
                </Link>
              </li>
              <li className="list-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" className="inline-block">
                  <path
                    fill="currentColor"
                    d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909L17.243 12L7 19.091V4.909z"
                  />
                </svg>
              </li>
              <li className="text-gray-800 list-item">courses list</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
