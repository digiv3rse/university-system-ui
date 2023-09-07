/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="items-center text-zinc-500 md:flex space-y-3 md:space-y-0 text-[0.94rem] leading-5 justify-between px-3.5">
        <h2 className="text-zinc-800 text-[25px] md:text-[2.34rem] leading-none font-bold">Eduport Latest News</h2>

        <div>
          <span className="mr-2">Want to read more?</span>

          <Link
            className="bg-sky-600/[0.1] text-sky-600 hover:text-white hover:bg-primary-400 cursor-pointer inline-block text-[0.81rem] font-medium py-1.5 px-3 text-center align-middle border border-solid rounded overflow-hidden "
            href="/"
          >
            Go here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              className="lucide lucide-chevron-right inline-block ml-1 -mt-0.5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ================== news started here */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
        <div className="lg:px-3">
          <div className="flex flex-col break-words relative rounded-lg">
            <div className="rounded-lg overflow-hidden">
              <img
                className="h-64 w-full align-middle rounded-lg overflow-clip object-cover object-center"
                src="https://eduport.webestica.com/assets/images/event/02.jpg"
                alt=""
              />

              <div className="items-start bottom-0 flex flex-row left-0 absolute top-0 z-[2] rounded-lg p-4">
                <span className="bg-rose-600 text-white cursor-pointer text-[0.80rem] py-1 px-2 text-center rounded-md">Student life</span>
              </div>
            </div>

            <div className="flex-grow p-3 mt-1 z-10">
              <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2 hover:text-primary-600">
                <Link className="cursor-pointer" href="#">
                  Student Loan Survey: Many Owe $50K-plus
                </Link>
              </h5>

              <p
                className="mb-4 text-ellipsis overflow-hidden"
                style={{
                  display: "-webkit-box",
                }}
              >
                Affronting imprudence do he he everything. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter
                proposal laughing any son law consider. Needed except up piqued an.{"  "}
              </p>

              <div className="flex justify-between">
                <h6 className="text-zinc-800 font-bold hover:text-primary-600">
                  <Link className="cursor-pointer" href="#">
                    Frances Guerrero
                  </Link>
                </h6>

                <span className="text-[0.82rem]">30M Ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:px-3">
          <div className="bg-slate-100 flex flex-col mb-6 break-words rounded-lg">
            <div className="flex-grow py-4 px-5">
              <span className="bg-emerald-500 text-white cursor-pointer inline-block text-[0.80rem] mb-2 py-1 px-2 text-center rounded-md">
                Research
              </span>

              <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2 hover:text-primary-600">
                <Link className="cursor-pointer" href="#">
                  How to make a college list
                </Link>
              </h5>

              <p className="mb-4">
                Prospective students should start broadly and then narrow their list down to colleges that best fit their needs, experts say.Yet
                remarkably appearance get him his projection.{" "}
              </p>

              <div className="flex justify-between">
                <h6 className="text-zinc-800 font-bold hover:text-primary-600">
                  <Link className="cursor-pointer" href="#">
                    Louis Crawford
                  </Link>
                </h6>

                <span className="text-[0.82rem]">12H Ago</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col break-words relative rounded-lg">
            <div className="rounded-lg overflow-hidden">
              <img
                className="h-full lg:h-28 w-full align-middle overflow-clip object-fill object-center"
                src="https://eduport.webestica.com/assets/images/event/01.jpg"
                alt=""
              />

              <div className="bottom-0 left-0 absolute top-0 z-[2] rounded-lg p-4">
                <span className="bg-cyan-600 text-white cursor-pointer text-[0.80rem] py-1 px-2 text-center rounded-md">Student story</span>
              </div>
            </div>

            <div className="flex-grow p-4 z-10">
              <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2 hover:text-primary-600">
                <Link className="cursor-pointer" href="#">
                  Campus Support for First-Year Students
                </Link>
              </h5>

              <p
                className="mb-4 text-ellipsis overflow-hidden"
                style={{
                  display: "-webkit-box",
                }}
              >
                Prospective students should start broadly and then narrow their list{" "}
              </p>

              <div className="flex justify-between">
                <h6 className="text-zinc-800 font-bold hover:text-primary-600">
                  <Link className="cursor-pointer" href="#">
                    Lori Stevens
                  </Link>
                </h6>

                <span className="text-[0.82rem]">3M Ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-3">
          <div className="flex flex-col break-words relative rounded-lg">
            <div className="rounded-lg overflow-hidden">
              <img
                className="h-56 w-full rounded-tl-lg rounded-tr-lg align-middle overflow-clip object-cover object-center"
                src="https://eduport.webestica.com/assets/images/event/03.jpg"
                alt=""
              />

              <div className="items-start bottom-0 left-0 absolute top-0 z-10 rounded-lg p-4">
                <span className="bg-violet-700 text-white cursor-pointer text-[0.80rem] py-1 px-2 text-center rounded-md">Covid-19</span>
              </div>
            </div>

            <div className="flex-grow p-4 z-10">
              <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2 hover:text-primary-600">
                <Link className="cursor-pointer" href="#">
                  Covid-19 and the college experienced
                </Link>
              </h5>

              <p className="mb-4">Rooms oh fully taken by worse do. Points afraid but may end law.Points afraid but may end law. </p>

              <div className="flex justify-between">
                <h6 className="text-zinc-800 font-bold hover:text-primary-600">
                  <Link className="cursor-pointer" href="#">
                    Amanda Reed
                  </Link>
                </h6>

                <span className="text-[0.82rem]">July 21, 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
