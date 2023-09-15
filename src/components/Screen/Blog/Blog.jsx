/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="text-zinc-500 text-[0.94rem] leading-5">
      <div className="break-words relative rounded-lg">
        <div className="rounded-lg overflow-hidden">
          <img
            className="w-full h-full align-middle rounded-lg overflow-clip"
            src="https://eduport.webestica.com/assets/images/event/02.jpg"
            alt=""
          />

          <div className="items-start flex left-0 absolute top-0 z-[2] rounded-lg p-4">
            <a className="bg-rose-600 text-white cursor-pointer text-[0.80rem] py-1 px-2 text-center rounded-md" href="#">
              Student life
            </a>
          </div>
        </div>

        <div className="flex-grow py-4 px-5">
          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2 hover:text-primary-600 duration-300 transition ease-in-out">
            <a className="cursor-pointer" href="#">
              Student Loan Survey: Many Owe $50K-plus
            </a>
          </h5>

          <p
            className="mb-4 text-ellipsis overflow-hidden"
            style={{
              display: "-webkit-box",
            }}
          >
            Affronting imprudence do he he everything. Offered chiefly farther of...
          </p>

          <div className="flex justify-between">
            <h6 className="text-zinc-800 font-bold hover:text-primary-600 duration-300 transition ease-in-out">
              <Link className="cursor-pointer" href="#">
                Frances Guerrero
              </Link>
            </h6>

            <span className="text-[0.82rem]">30M Ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
