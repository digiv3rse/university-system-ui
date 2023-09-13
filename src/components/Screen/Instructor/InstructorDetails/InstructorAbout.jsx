import React from "react";

const InstructorAbout = () => {
  return (
    <section className="bg-white text-zinc-500 text-[0.94rem] leading-5 break-words rounded-lg p-6 shadow-3xl">
      <div>
        <h4 className="text-zinc-800 text-[1.64rem] leading-8 font-bold break-words">Education</h4>

        <div className="mb-10">
          <div className="items-center text-zinc-500 flex text-[0.94rem] leading-5 break-words mt-6">
            <span className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="inline-block">
                <path
                  fill="none"
                  stroke="#747579"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M14.25 9.25V6L8 2.75L1.75 6L8 9.25l3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5"
                />
              </svg>
            </span>

            <div className="ml-4">
              <h6 className="text-zinc-800 font-bold">Harvard University</h6>

              <p className="text-[0.82rem]">Bachelor in Computer Graphics</p>
            </div>
          </div>{" "}
          <div className="items-center text-zinc-500 flex text-[0.94rem] leading-5 break-words mt-6">
            <span className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="inline-block">
                <path
                  fill="none"
                  stroke="#747579"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M14.25 9.25V6L8 2.75L1.75 6L8 9.25l3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5"
                />
              </svg>
            </span>

            <div className="ml-4">
              <h6 className="text-zinc-800 font-bold">University of Toronto</h6>

              <p className="text-[0.82rem]">Master in Computer Graphics</p>
            </div>
          </div>{" "}
          <div className="items-center text-zinc-500 flex text-[0.94rem] leading-5 break-words mt-6">
            <span className="h-10 w-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="inline-block">
                <path
                  fill="none"
                  stroke="#747579"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M14.25 9.25V6L8 2.75L1.75 6L8 9.25l3.25-1.5v3.5c0 1-1.5 2-3.25 2s-3.25-1-3.25-2v-3.5"
                />
              </svg>
            </span>

            <div className="ml-4">
              <h6 className="text-zinc-800 font-bold">East Ray University</h6>

              <p className="text-[0.82rem]">Bachelor in Computer Graphics</p>
            </div>
          </div>
        </div>
        <hr className="" />
        {/* skills */}
        <div className="my-6">
          <h4 className="text-zinc-800 text-[1.64rem] leading-8 font-bold break-words">Skills</h4>
          <div className="text-zinc-500 grid grid-cols-1 gap-2 text-[0.94rem] leading-5 mt-6">
            <div className="mt-1  px-3">
              <div className="overflow-hidden">
                <h6 className="text-zinc-800 font-bold">Graphic design</h6>

                <div>
                  <span className="inline-block w-[90%] text-end">90%</span>
                  <div className="bg-sky-600/[0.1] text-xs relative rounded-2xl w-full h-1">
                    <span className="bg-sky-600 text-xl absolute top-0 left-0 w-[90%] h-1 rounded-2xl"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-1  px-3">
              <div className="overflow-hidden">
                <h6 className="text-zinc-800 font-bold">Web design</h6>

                <div>
                  <span className="inline-block w-[80%] text-end">80%</span>
                  <div className="bg-green-200 text-xs relative rounded-2xl w-full h-1">
                    <span className="bg-green-600 text-xl absolute top-0 left-0 w-[80%] h-1 rounded-2xl"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-1  px-3">
              <div className="overflow-hidden">
                <h6 className="text-zinc-800 font-bold">HTML/CSS</h6>

                <div>
                  <span className="inline-block w-[60%] text-end">60%</span>
                  <div className="bg-orange-200 text-xs relative rounded-2xl w-full h-1">
                    <span className="bg-orange-400 text-xl absolute top-0 left-0 w-[60%] h-1 rounded-2xl"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-1 px-3">
              <div className="overflow-hidden">
                <h6 className="text-zinc-800 font-bold">UI/UX</h6>
                <div>
                  <span className="inline-block w-[50%] text-end">50%</span>
                  <div className="bg-red-200 text-xs relative rounded-2xl w-full h-1">
                    <span className="bg-red-500 text-xl absolute top-0 left-0 w-[50%] h-1 rounded-2xl"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default InstructorAbout;
