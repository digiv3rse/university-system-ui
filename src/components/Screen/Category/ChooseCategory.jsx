/* eslint-disable @next/next/no-img-element */
import Title from "@/components/Common/Title";
import Link from "next/link";
import React from "react";
import { courseCategories } from "../../../../data/courseCategories";

const ChooseCategory = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="text-zinc-500 text-[0.94rem] leading-5 px-3.5 text-center">
        <Title>Choose a Categories</Title>

        <p className="mt-4">Perceived end knowledge certainly day sweetness why cordially</p>
      </div>

      {/* ============================= choose category stated */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {courseCategories.map(({ name, imageSrc, bg_color, courseCount }, idx) => (
          <div key={idx} className="text-zinc-500 text-[0.94rem] leading-5">
            {SingleCategory(bg_color, imageSrc, name, courseCount)}
          </div>
        ))}
      </div>
      {/* ============================= choose category end */}
    </div>
  );
};

export default ChooseCategory;

// ================================= single category design here
function SingleCategory(bg_color, imageSrc, name, courseCount) {
  return (
    <div style={{ backgroundColor: bg_color }} className={`break-words text-center rounded-lg p-6`}>
      <div className="h-20 w-20 bg-white text-[1.90rem] leading-9 mb-4 mx-auto rounded-full flex items-center justify-center">
        <img className="h-14 w-14 align-middle overflow-clip" src={imageSrc} alt="" />
      </div>

      <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2 hover:text-primary-600 duration-300 transition ease-in-out">
        <Link className="cursor-pointer" href="#">
          {name}
        </Link>
      </h5>

      <h6 className="text-zinc-800 font-bold">{courseCount} Courses</h6>
    </div>
  );
}
