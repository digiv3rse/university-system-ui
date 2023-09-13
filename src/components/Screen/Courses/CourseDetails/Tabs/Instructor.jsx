/* eslint-disable @next/next/no-img-element */
import SocialLinksInstructor from "@/components/Screen/Instructor/InstructorLists/SocialLinksInstructor";
import Link from "next/link";
import React from "react";

const Instructor = () => {
  return (
    <div className="py-8 px-5">
      <div className="text-zinc-500 text-[0.94rem] leading-5 break-words pt-2">
        <div>
          <div className="bg-white flex flex-col mb-6 rounded-lg">
            <div className="items-center flex flex-wrap">
              <div>
                <img
                  className="h-auto sm:w-80 align-middle rounded-lg overflow-clip"
                  src="https://eduport.webestica.com/assets/images/instructor/01.jpg"
                  alt=""
                />
              </div>

              <div>
                <div className="flex-grow py-4 px-5">
                  <h3 className="text-zinc-800 text-3xl font-bold">Louis Ferguson</h3>

                  <p className="mb-3">Instructor of Marketing</p>

                  {/* social icons */}
                  <ul className="flex items-center gap-3">
                    <li className="">
                      <Link
                        className="bg-[#5475BC] text-white flex items-center justify-center w-6 h-6 rounded cursor-pointer hover:bg-primary-600  duration-300 transition ease-in-out "
                        href="/"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="inline-block">
                          <path
                            fill="white"
                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        className="bg-[#FD6851] text-white flex items-center justify-center w-6 h-6 rounded cursor-pointer hover:bg-primary-600  duration-300 transition ease-in-out "
                        href="/"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                          <path
                            fill="white"
                            d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        className="bg-primary-500 text-white flex items-center justify-center w-6 h-6 rounded cursor-pointer hover:bg-primary-600  duration-300 transition ease-in-out"
                        href="/"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="inline-block">
                          <path
                            fill="white"
                            d="M22 5.796a8.192 8.192 0 0 1-2.357.646a4.115 4.115 0 0 0 1.805-2.27a8.197 8.197 0 0 1-2.606.996a4.105 4.105 0 0 0-7.097 2.808a4.15 4.15 0 0 0 .105.935a11.65 11.65 0 0 1-8.456-4.287a4.107 4.107 0 0 0 1.27 5.478a4.084 4.084 0 0 1-1.86-.513v.052a4.105 4.105 0 0 0 3.292 4.023a4.082 4.082 0 0 1-1.081.143a4.165 4.165 0 0 1-.773-.072a4.108 4.108 0 0 0 3.832 2.85A8.261 8.261 0 0 1 2 18.282a11.611 11.611 0 0 0 6.29 1.844A11.594 11.594 0 0 0 19.962 8.453q0-.267-.013-.53A8.36 8.36 0 0 0 22 5.796Z"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        className="bg-[#207EB4] text-white flex items-center justify-center w-6 h-6 rounded cursor-pointer hover:bg-primary-600  duration-300 transition ease-in-out "
                        href="/"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-2 -2 24 24" className="inline-block">
                          <path
                            fill="white"
                            d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91c-1.182 0-1.886.796-2.195 1.565c-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126c2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>

                  {/* details  */}
                  <ul className="my-4">
                    <li className="inline-block mr-2">
                      <div className="items-center flex mb-2 mr-4">
                        <span className="h-10 w-10 bg-orange-500/[0.1] text-orange-500 rounded-full flex justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" className="inline-block">
                            <path
                              fill="currentColor"
                              d="M219.3.5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128S96 230.7 96 160v-57.1l-48-9.6v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3S52.8 256 48 256H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64c0-11.4 8.1-21.3 19.3-23.5l200-40zM111.9 327.7c10.5-3.4 21.8.4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5c65 20.9 112 81.7 112 153.6c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"
                            />
                          </svg>
                        </span>

                        <span className="text-zinc-800 ml-2">9.1k</span>
                      </div>
                    </li>

                    <li className="inline-block mr-2">
                      <div className="items-center flex mb-2 mr-4">
                        <span className="h-10 w-10 bg-amber-400/[0.15] text-amber-400 rounded-full flex justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="inline-block">
                            <path
                              fill="currentColor"
                              d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z"
                            />
                          </svg>
                        </span>

                        <span className="text-zinc-800 ml-2">4.5</span>
                      </div>
                    </li>

                    <li className="inline-block mr-2">
                      <div className="items-center flex mb-2 mr-4">
                        <span className="h-10 w-10 bg-rose-600/[0.1] text-rose-600 rounded-full flex justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512" className="inline-block">
                            <path
                              fill="currentColor"
                              d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440Z"
                            />
                          </svg>
                        </span>

                        <span className="text-zinc-800 ml-2">29 Courses</span>
                      </div>
                    </li>

                    <li className="inline-block">
                      <div className="items-center flex mb-2 mr-4">
                        <span className="h-10 w-10 bg-cyan-600/[0.1] text-cyan-600 rounded-full flex justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="inline-block">
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M8.002 4.553a50.577 50.577 0 0 1 8.099.04l1.623.138a2.666 2.666 0 0 1 2.409 2.252l.102.669a20.665 20.665 0 0 1-.096 6.835a2.343 2.343 0 0 1-2.305 1.923H8.858c-.207 0-.41.051-.592.149l-3.911 2.102A.75.75 0 0 1 3.25 18V9.483a4.93 4.93 0 0 1 4.559-4.915l.193-.015ZM8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>

                        <span className="text-zinc-800 ml-2">205</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* about instructors */}
          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">About Instructor</h5>

          <p className="mb-4">
            Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded
            boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashboard see frankness objection abilities. As hastened oh
            produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed of add screened rendered six say his
            striking confined.{" "}
          </p>

          <p className="mb-4">
            As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably
            behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.
          </p>

          <div className="w-full">
            <ul className="flex flex-col list-disc rounded-md">
              <li className="rounded-tl-md rounded-tr-md pt-1.5">
                Mail ID:
                <a className="text-sky-600 cursor-pointer ml-2" href="/#">
                  hello@email.com
                </a>
              </li>

              <li className="rounded-bl-md rounded-br-md pt-1.5">
                Web:
                <a className="text-sky-600 cursor-pointer ml-2" href="/#">
                  https://uniport.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
