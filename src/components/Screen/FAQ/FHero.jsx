"use client";
import Link from "next/link";
import React from "react";

const FHero = () => {
  return (
    <div className="py-12 bg-[#F5F7F9] rounded-lg">
      <div className="text-zinc-500 text-[0.94rem] leading-5 relative">
        <div className="mx-auto px-6 relative text-center">
          <h1 className="text-zinc-800 text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.50rem] leading-snug font-bold mb-2">
            Hello, how can we help?
          </h1>

          <div className=" w-full sm:w-[65%] mx-auto mt-6">
            <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-md p-2">
              <div className="w-full relative ">
                <input
                  className="w-full h-10 rounded-bl-md rounded-tl-md outline-none text-zinc-700 cursor-text flex-grow mr-1 py-2 px-4"
                  placeholder="Ask a question..."
                  type="text"
                />

                <button className="items-start bg-blue-950 text-white cursor-pointer font-medium py-2 px-4 align-middle z-[2] border border-blue-950 border-solid rounded-md overflow-hidden absolute right-0 top-0">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full mt-12 px-6">
          <div className="text-center">
            <p className="mt-6 px-3">Choose a category to quickly find the help you need</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
              {" "}
              <div className="">
                <div className="group bg-white flex flex-col flex-grow break-words border border-black/[0.1] border-solid rounded-lg group-hover:border hover:border-primary-600 duration-300 transition ease-in-out">
                  <Link className="text-sky-600 cursor-pointer p-4" href="/">
                    <h2 className="text-zinc-800 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        className="text-zinc-400 inline-block group-hover:text-primary-600 duration-300 transition ease-in-out"
                      >
                        <path
                          fill="currentColor"
                          d="M10 21v-6H9q-.425 0-.713-.288T8 14V9q0-.825.588-1.413T10 7h4q.825 0 1.413.588T16 9v5q0 .425-.288.713T15 15h-1v6q0 .425-.288.713T13 22h-2q-.425 0-.713-.288T10 21Zm2-15q-.825 0-1.413-.588T10 4q0-.825.588-1.413T12 2q.825 0 1.413.588T14 4q0 .825-.588 1.413T12 6Z"
                        />
                      </svg>
                    </h2>

                    <h6 className="text-zinc-800 font-bold">User Guide</h6>
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="group bg-white flex flex-col flex-grow break-words border border-black/[0.1] border-solid rounded-lg group-hover:border hover:border-primary-600 duration-300 transition ease-in-out">
                  <Link className="text-sky-600 cursor-pointer p-4" href="/">
                    <h2 className="text-zinc-800 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 640 512"
                        className="text-zinc-400 inline-block group-hover:text-primary-600 duration-300 transition ease-in-out"
                      >
                        <path
                          fill="currentColor"
                          d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4c-16.6 15.6-16.3 40.5-2.1 56c12.7 13.9 39.4 17.6 56.1 2.7c.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1c6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4c-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2l17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6l5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"
                        />
                      </svg>
                    </h2>

                    <h6 className="text-zinc-800 font-bold">Assistance</h6>
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="group bg-white flex flex-col flex-grow break-words border border-black/[0.1] border-solid rounded-lg group-hover:border hover:border-primary-600 duration-300 transition ease-in-out">
                  <Link className="text-sky-600 cursor-pointer p-4" href="/">
                    <h2 className="text-zinc-800 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        className="text-zinc-400 inline-block group-hover:text-primary-600 duration-300 transition ease-in-out"
                      >
                        <g transform="rotate(180 12 12)">
                          <path
                            fill="currentColor"
                            d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10-10.002 10c-5.524.001-10-4.477-10-10C1.999 6.476 6.476 1.998 12 1.998Zm-.004 8.25a1 1 0 0 0-.992.885l-.007.116l.004 5.502l.006.116a1 1 0 0 0 1.987 0L13 16.75l-.004-5.502l-.007-.117a1 1 0 0 0-.994-.882Zm.005-3.749a1.251 1.251 0 1 0 0 2.503A1.251 1.251 0 0 0 12 6.5Z"
                          />
                        </g>
                      </svg>
                    </h2>

                    <h6 className="text-zinc-800 font-bold">General guide</h6>
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="group bg-white flex flex-col flex-grow break-words border border-black/[0.1] border-solid rounded-lg group-hover:border hover:border-primary-600 duration-300 transition ease-in-out">
                  <Link className="text-sky-600 cursor-pointer p-4" href="/">
                    <h2 className="text-zinc-800 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 512 512"
                        className="text-zinc-400 inline-block group-hover:text-primary-600 duration-300 transition ease-in-out"
                      >
                        <path
                          fill="currentColor"
                          d="M80 480a16 16 0 0 1-16-16V68.13a24 24 0 0 1 11.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.84 183.84 0 0 0 71-14.5a18 18 0 0 1 25 16.58v219.36a20 20 0 0 1-12 18.31c-8.71 3.81-40.51 16.25-84 16.25c-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 0 1-16 16Z"
                        />
                      </svg>
                    </h2>

                    <h6 className="text-zinc-800 font-bold">Getting started</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FHero;
