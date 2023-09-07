/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutPortal = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="text-zinc-500 text-[0.94rem] leading-5 lg:px-3.5 w-full lg:w-[65%]">
        <h2 className="text-zinc-800 text-[2.34rem] leading-none font-bold mb-2">About Eduport Portal</h2>

        <p>
          How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask to style Me
          mean able my by in they Extremity now strangers contained.
        </p>
      </div>

      {/* =============== */}
      {AboutPortalDescribe()}

      {/* ===================== details */}
    </div>
  );
};

export default AboutPortal;

// ======================= about describe
function AboutPortalDescribe() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
      <div>
        <img className="rounded-2xl overflow-clip w-full" src="https://eduport.webestica.com/assets/images/about/06.jpg" alt="" />
      </div>
      <div>
        <div className="text-zinc-500 text-[0.94rem] leading-5 px-3.5">
          <h4 className="text-zinc-800 text-[1.64rem] leading-8 font-bold mb-4">35,000+ happy students joined with us to achieve their goals</h4>

          <p className="mb-4">
            How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask to style Me
            mean able my by in they Extremity now strangers contained breakfast him discourse additions Sincerity collected contented led now
            perpetual extremely forfeited{" "}
          </p>

          <p className="mb-4">
            Happiness prosperous impression had conviction For every delay in they Extremity now strangers contained breakfast him discourse additions
            Sincerity collected contented led now perpetual extremely forfeited
          </p>

          <ul className="flex flex-col list-disc mt-6 rounded-md">
            <li className="rounded-tl-md rounded-tr-md flex py-1.5">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00F700" className=" mr-2" width={20} height={20}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z"
                    stroke="#00F700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10"
                    stroke="#00F700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Setup and installation takes less time
            </li>

            <li className="flex py-1.5">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00F700" className=" mr-2" width={20} height={20}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z"
                    stroke="#00F700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10"
                    stroke="#00F700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Professional and easy to use software
            </li>

            <li className="flex py-1.5">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00F700" className=" mr-2" width={20} height={20}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z"
                    stroke="#00F700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10"
                    stroke="#00F700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Perfect for any device with pixel-perfect design
            </li>

            <li className="rounded-bl-md rounded-br-md flex py-1.5">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00F700" className=" mr-2" width={20} height={20}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z"
                    stroke="#00F700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10"
                    stroke="#00F700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Setup and installation too fast
            </li>
          </ul>
        </div>
        {/* ================= */}
        <div className="text-zinc-500 grid grid-cols-1 md:grid-cols-2 gap-6 text-[0.94rem] leading-5">
          <div className="mt-6 px-3">
            <div className="overflow-hidden">
              <h6 className="text-zinc-800 font-bold">Enterprise customer</h6>

              <div>
                <span className="inline-block w-[85%] text-end">85%</span>
                <div className="bg-sky-600/[0.1] text-xs relative rounded-2xl w-full h-2">
                  <span className="bg-sky-600 text-xl absolute top-0 left-0 w-[85%] h-2 rounded-2xl"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-3">
            <div className="overflow-hidden">
              <h6 className="text-zinc-800 font-bold">Accurate Course</h6>

              <div>
                <span className="inline-block w-[90%] text-end">90%</span>
                <div className="bg-sky-600/[0.1] text-xs relative rounded-2xl w-full h-2">
                  <span className="bg-sky-600 text-xl absolute top-0 left-0 w-[90%] h-2 rounded-2xl"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-3">
            <div className="overflow-hidden">
              <h6 className="text-zinc-800 font-bold">Languages</h6>

              <div>
                <span className="inline-block w-[75%] text-end">75%</span>
                <div className="bg-sky-600/[0.1] text-xs relative rounded-2xl w-full h-2">
                  <span className="bg-sky-600 text-xl absolute top-0 left-0 w-[75%] h-2 rounded-2xl"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-3">
            <div className="overflow-hidden">
              <h6 className="text-zinc-800 font-bold">Instructors</h6>

              <div>
                <span className="inline-block w-[95%] text-end">95%</span>
                <div className="bg-sky-600/[0.1] text-xs relative rounded-2xl w-full h-2">
                  <span className="bg-sky-600 text-xl absolute top-0 left-0 w-[95%] h-2 rounded-2xl"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
