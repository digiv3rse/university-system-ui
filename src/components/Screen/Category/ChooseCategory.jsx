/* eslint-disable @next/next/no-img-element */
import Title from "@/components/Common/Title";
import Link from "next/link";
import React from "react";

const ChooseCategory = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="text-zinc-500 text-[0.94rem] leading-5 px-3.5 text-center">
        <Title>Choose a Categories</Title>

        <p className="mt-4">Perceived end knowledge certainly day sweetness why cordially</p>
      </div>

      {/* ============================= choose category stated */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className="text-zinc-500 text-[0.94rem] leading-5">
            <div className="bg-emerald-500/[0.1] break-words text-center rounded-lg p-6">
              <div className="h-20 w-20 bg-white text-[1.90rem] leading-9 mb-4 mx-auto rounded-full flex items-center justify-center">
                <img
                  className="h-14 w-14 align-middle overflow-clip"
                  src="https://eduport.webestica.com/assets/images/element/data-science.svg"
                  alt=""
                />
              </div>

              <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2 hover:text-primary-600 duration-300 transition ease-in-out">
                <Link className="cursor-pointer" href="#">
                  Data Science
                </Link>
              </h5>

              <h6 className="text-zinc-800 font-bold">15 Courses</h6>
            </div>
          </div>
        ))}
      </div>
      {/* ============================= choose category end */}
    </div>
  );
};

export default ChooseCategory;
