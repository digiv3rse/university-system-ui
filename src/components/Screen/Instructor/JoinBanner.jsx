import Link from "next/link";
import React from "react";

const JoinBannerForInstructors = () => {
  return (
    <section className="mt-10 md:mt-20">
      <div className="bg-emerald-500 text-zinc-500 text-[0.94rem] leading-5 rounded-lg p-5 sm:p-6 lg:p-12">
        <div className=" relative">
          <div className="px-3.5">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-white text-[1.5rem] lg:text-3xl font-bold mb-2">Become an Instructor!</h3>

                <p className="text-white/[0.98] leading-relaxed pr-8 lg:pr-0">
                  Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his
                  ten who diminution astonished.
                </p>
              </div>

              <div className="lg:text-right">
                <Link
                  className="bg-zinc-800 text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-zinc-800 border-solid rounded-md overflow-hidden hover:bg-zinc-700 duration-300 transition ease-in-out"
                  href="/"
                >
                  Start Teaching today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinBannerForInstructors;
