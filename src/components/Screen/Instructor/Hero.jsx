import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="bg-zinc-800 text-zinc-500 text-[0.94rem] leading-5 text-center rounded-lg p-6">
        <h2 className="text-white text-[25px] md:text-[2.34rem] leading-none font-bold">Instructors list</h2>

        <div className="flex justify-center">
          <div>
            <ol className="flex flex-wrap text-[0.81rem] py-2">
              <li className="list-item">
                <Link className="text-gray-300 cursor-pointer hover:text-primary-500 duration-300 transition" href="/">
                  Home
                </Link>
              </li>

              <li className="text-gray-300 list-item pl-3">instructor list</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
