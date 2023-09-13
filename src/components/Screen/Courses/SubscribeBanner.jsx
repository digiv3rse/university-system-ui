import Link from "next/link";
import React from "react";

const SubscribeBanner = () => {
  return (
    <section className="mt-10 md:mt-20">
      <div className="bg-primary-500 text-zinc-500 text-[0.94rem] md:leading-5 rounded-lg p-5 sm:p-6 lg:p-12">
        <div className=" relative">
          <div className="px-3.5">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
              <div className="">
                <h3 className="text-white text-[1.5rem] lg:text-3xl font-bold mb-2">Are you ready for a more great Conversation?</h3>
              </div>

              <div className="">
                <form className="bg-white text-zinc-500 text-[0.94rem] leading-5 text-right rounded-md p-2 w-full">
                  <div className="w-full items-stretch flex flex-wrap relative">
                    <input
                      className="w-full h-10 rounded-bl-md outline-none rounded-tl-md text-zinc-700 cursor-text flex-grow mr-1 py-2 px-4"
                      placeholder="Type email..."
                      type="email"
                    />

                    <button className="items-start bg-zinc-800 text-white cursor-pointer font-medium py-2 px-4 text-center align-middle z-[2] border border-zinc-800 border-solid rounded-md overflow-hidden absolute top-0 right-0">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeBanner;
