import Title from "@/components/Common/Title";
import Link from "next/link";
import React from "react";

const RecommendedTopic = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="text-zinc-500 text-[0.94rem] leading-5">
        <div className="mb-6">
          <div className="w-full text-center">
            <Title>Recommended Topics</Title>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="">
            <div className="h-full bg-slate-100 flex flex-col break-words rounded-lg py-2">
              <div className="rounded-tl-lg rounded-tr-lg px-4 pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14" className="text-emerald-500">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13Z" />
                    <path d="M3.7 8c.5 1.8 2.5 2.9 4.3 2.4c1.1-.4 2-1.3 2.3-2.4M4.8 5.45a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.4.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5" />
                  </g>
                </svg>

                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mt-2">Get started </h5>
              </div>

              <div className="flex-grow py-4 px-5">
                <ul className="flex flex-col flex-wrap">
                  <li className="list-item hover:text-sky-600 duration-300">
                    <Link className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Gulp and Customization
                    </Link>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Color Scheme and Logo Settings
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Dark mode, RTL Version and Lazy Load
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Sources, Credits and Changelog
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Updates and Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            <div className="h-full bg-slate-100 flex flex-col break-words rounded-lg py-2">
              <div className="rounded-tl-lg rounded-tr-lg px-4 pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" className="text-amber-400">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m21 14l-9 6l-9-6m18-4l-9 6l-9-6l9-6l9 6Z"
                  />
                </svg>

                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mt-2">Account Setup</h5>
              </div>

              <div className="flex-grow py-4 px-5">
                <ul className="flex flex-col flex-wrap">
                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Connecting to your Account
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Edit your profile information
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Connecting to other Social Media Accounts
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Adding your profile picture
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Describing your store
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            <div className="h-full bg-slate-100 flex flex-col break-words rounded-lg py-2">
              <div className="rounded-tl-lg rounded-tr-lg px-4 pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" className="text-orange-500">
                  <path
                    fill="currentColor"
                    d="M142 176a6 6 0 0 1-6 6a14 14 0 0 1-14-14v-40a2 2 0 0 0-2-2a6 6 0 0 1 0-12a14 14 0 0 1 14 14v40a2 2 0 0 0 2 2a6 6 0 0 1 6 6Zm-18-82a10 10 0 1 0-10-10a10 10 0 0 0 10 10Zm106 34A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102Zm-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90Z"
                  />
                </svg>

                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mt-2">Other Topics </h5>
              </div>

              <div className="flex-grow py-4 px-5">
                <ul className="flex flex-col flex-wrap">
                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Security & Privacy
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Author, Publisher & Admin Guides
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Pricing plans
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Sales Tax & Regulatory Fees
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Promotions & Deals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="">
            <div className="h-full bg-slate-100 flex flex-col break-words rounded-lg py-2">
              <div className="rounded-tl-lg rounded-tr-lg px-4 pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="text-violet-500">
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path
                      stroke-linecap="round"
                      d="M22 22H2m0-11l4.063-3.25M22 11l-8.126-6.5a3 3 0 0 0-3.748 0l-.782.625M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5m16 0v4m0 8.5v-4.5"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44M9 22v-5"
                    />
                    <path d="M14 9.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
                  </g>
                </svg>
                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mt-2">Advanced Usage </h5>
              </div>

              <div className="flex-grow py-4 px-5">
                <ul className="flex flex-col flex-wrap">
                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Admin & Billing
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Become a Pro
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Mobile application
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Guide
                    </a>
                  </li>

                  <li className="list-item hover:text-sky-600 duration-300">
                    <a className="cursor-pointer flex py-1 pr-3" href="/help/id">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-sky-600 -mt-0 inline-block">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m10 17l5-5m0 0l-5-5"
                        />
                      </svg>
                      Promotions & Deals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedTopic;
