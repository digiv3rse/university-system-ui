/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const BDetailsHero = () => {
  return (
    <section className=" mt-2 lg:mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
        <div className=" order-2 lg:order-1">
          <div className="text-zinc-500 text-[0.94rem] leading-5 lg:text-center">
            <div className="flex flex-col">
              <div className="w-24 h-24 lg:h-32 lg:w-32 inline-block lg:mx-auto">
                <img
                  className="h-full w-full object-cover align-middle rounded-full overflow-clip"
                  src="https://eduport.webestica.com/assets/images/avatar/09.jpg"
                  alt=""
                />
              </div>

              <Link className="text-zinc-800 cursor-pointer text-[1.31rem] leading-7 font-bold mt-2" href="/instructors/id">
                Frances Guerrero
              </Link>

              <p className="mb-2">Editor at Eduport</p>
            </div>

            <ul className="mb-4 flex items-center space-x-2 lg:block">
              <li className="my-2 lg:mr-2">Nov 15, 2021</li>

              <li className="my-2 lg:mr-2">5 min read</li>

              <li className="bg-orange-500 text-white inline-block text-[0.80rem] mr-2 py-1 px-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-1 -mt-1">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07Z"
                  />
                </svg>
                266
              </li>

              <li className="bg-cyan-600 text-white inline-block text-[0.80rem] py-1 px-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" className="inline-block mr-1 -mt-1">
                  <path
                    fill="currentColor"
                    d="M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75Zm-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.36 130.36 0 0 1 29.52 128a130.45 130.45 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.36 130.36 0 0 1 226.48 128a130.45 130.45 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44Zm0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20Z"
                  />
                </svg>
                2K
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="text-zinc-500 text-[0.94rem] leading-5">
            <span>40D ago</span>
            <span className="mx-2">|</span>
            <div className="bg-emerald-500 text-white inline-block text-[0.80rem] py-1 px-2 text-center rounded-md">Research</div>

            <h1 className="text-zinc-800 text-[2.3rem] md:text-[3rem] lg:text-[3.6rem] xl:text-[4.00rem] leading-tight font-bold mt-2">
              Never underestimate the influence of Eduport
            </h1>

            <p className="mb-4 mt-2">
              For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly
              unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness
              felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.
            </p>

            <p className="mb-4">
              Perceived end knowledge certainly day sweetness why cordially. On forth doubt miles of child. Exercise joy man children rejoiced. Yet
              uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls, death own point now men. Match
              way these she avoids seeing death. She who drift their fat off. Ask a quick six seven offer see among. Handsome met debating sir
              dwelling age material. As style lived he worse dried. Offered related so visitors we private removed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BDetailsHero;
