/* eslint-disable @next/next/no-img-element */
import React from "react";

const HelpHero = () => {
  return (
    <div className="py-12 bg-[#E6F0F9] rounded-lg">
      <div className="text-zinc-500 flex flex-wrap text-[0.94rem] leading-5">
        <div className="mx-auto px-3.5 text-center">
          <h1 className="text-zinc-800 text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.50rem] leading-none font-bold mb-2">
            Search Solution. Get Support
          </h1>

          <p>Search here to get answers to your questions.</p>

          <form className="bg-white mt-6 rounded-md p-2 w-full sm:w-[75%] mx-auto">
            <div className=" w-full relative">
              <input
                className="w-full h-10 rounded-bl-md rounded-tl-md text-zinc-700 cursor-text flex-grow mr-1 py-2 px-4"
                placeholder="Search question..."
                type="text"
              />

              <button className="items-start bg-zinc-800 text-white cursor-pointer font-medium py-2 px-4 align-middle z-[2] border border-zinc-800 border-solid rounded-md overflow-hidden absolute top-0 right-0">
                Search
              </button>
            </div>
          </form>

          <div className="items-center flex flex-wrap mt-6 w-full sm:w-[75%] mx-auto">
            <div className="w-full px-3.5">
              <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">Popular questions</h5>

              <div className="gap-2 flex flex-wrap justify-center rounded-md">
                <a
                  className="bg-white text-zinc-800 cursor-pointer text-[0.81rem] mb-1.5 py-1.5 px-3 align-middle border border-white border-solid rounded overflow-hidden"
                  href="/help/id"
                >
                  {" "}
                  How can we help?
                </a>

                <a
                  className="bg-white text-zinc-800 cursor-pointer text-[0.81rem] mb-1.5 py-1.5 px-3 align-middle border border-white border-solid rounded overflow-hidden"
                  href="/help/id"
                >
                  {" "}
                  How to upload data to the system?{" "}
                </a>

                <a
                  className="bg-white text-zinc-800 cursor-pointer text-[0.81rem] mb-1.5 py-1.5 px-3 align-middle border border-white border-solid rounded overflow-hidden"
                  href="/help/id"
                >
                  {" "}
                  Installation Guide?{" "}
                </a>

                <a
                  className="bg-white text-zinc-800 cursor-pointer text-[0.81rem] mb-1.5 py-1.5 px-3 align-middle border border-white border-solid rounded overflow-hidden"
                  href="/help/id"
                >
                  {" "}
                  How to view expired course?{" "}
                </a>

                <a
                  className="bg-white text-zinc-800 cursor-pointer text-[0.81rem] mb-1.5 py-1.5 px-3 align-middle border border-white border-solid rounded overflow-hidden"
                  href="/help/id"
                >
                  {" "}
                  What&apos;s are the difference between a social?
                </a>

                <a
                  className="bg-sky-600/[0.1] text-sky-600 cursor-pointer text-[0.81rem] mb-1.5 py-1.5 px-3 align-middle border border-solid rounded overflow-hidden hover:bg-primary-200 duration-300"
                  href="/"
                >
                  View all question
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-14 px-3.5">
          <img
            className="w-full lg:h-72 align-middle overflow-clip"
            src="https://eduport.webestica.com/assets/images/element/help-center.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HelpHero;
