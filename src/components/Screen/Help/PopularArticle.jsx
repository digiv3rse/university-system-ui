/* eslint-disable @next/next/no-img-element */
import Title from "@/components/Common/Title";
import React from "react";

const PopularArticle = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="mb-6">
        <div className="w-full text-center">
          <Title>Recommended Topics</Title>
        </div>
      </div>
      <div className="text-zinc-500 grid grid-cols-1 lg:grid-cols-2 gap-6 text-[0.94rem] leading-5">
        <div className="">
          <div className="h-full bg-white  break-words border border-gray-200 border-solid rounded-lg p-6">
            <h4 className="text-zinc-800 text-[1.2rem] md:text-[1.64rem] leading-8 font-bold mb-6 hover:text-primary-600 duration-300">
              <a className="cursor-pointer" href="/blog">
                The installation part
              </a>
            </h4>

            <div className="items-center lg:flex lg:space-y-2">
              <ul className="flex list-disc">
                <li className="h-12 w-12 -mr-3">
                  <img
                    className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
                    alt=""
                  />
                </li>

                <li className="h-12 w-12 -mr-3">
                  <img
                    className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/02.jpg"
                    alt=""
                  />
                </li>

                <li className="h-12 w-12">
                  <img
                    className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/03.jpg"
                    alt=""
                  />
                </li>
              </ul>

              <div className="ml-2">
                <h6 className="text-zinc-800 font-bold mb-1">10 articles in this collection</h6>

                <p>
                  Written by <b className="font-bold">Carolyn Ortiz</b> ,<b className="font-bold">Billy Vasquez</b> and{" "}
                  <b className="font-bold">Larry Lawson</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="h-full bg-white flex flex-col flex-grow break-words border border-gray-200 border-solid rounded-lg p-6">
            <h4 className="text-zinc-800 text-[1.2rem] md:text-[1.64rem] leading-8 font-bold mb-6 hover:text-primary-600 duration-300">
              <a className="cursor-pointer" href="/blog">
                Supporting Customer With Inbox
              </a>
            </h4>

            <div className="items-center  lg:flex lg:space-y-2">
              <ul className="flex list-disc">
                <li className="h-12 w-12 -mr-3">
                  <img
                    className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/08.jpg"
                    alt=""
                  />
                </li>

                <li className="h-12 w-12">
                  <img
                    className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/04.jpg"
                    alt=""
                  />
                </li>
              </ul>

              <div className="ml-2">
                <h6 className="text-zinc-800 font-bold mb-1">5 articles in this collection</h6>

                <p>
                  Written by <b className="font-bold">Dennis Barrett</b> and <b className="font-bold">Louis Ferguson</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="h-full bg-white flex flex-col flex-grow break-words border border-gray-200 border-solid rounded-lg p-6">
            <h4 className="text-zinc-800 text-[1.2rem] md:text-[1.64rem] leading-8 font-bold mb-6 hover:text-primary-600 duration-300">
              <a className="cursor-pointer" href="/blog">
                Sending Effective Emails{" "}
              </a>
            </h4>

            <div className="items-center  lg:flex lg:space-y-2">
              <ul className="flex list-disc">
                <li className="h-12 w-12">
                  <img
                    className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/05.jpg"
                    alt=""
                  />
                </li>
              </ul>

              <div className="ml-2">
                <h6 className="text-zinc-800 font-bold mb-1">4 articles in this collection</h6>

                <p>
                  Written by <b className="font-bold">Jacqueline Miller</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="h-full bg-white flex flex-col flex-grow break-words border border-gray-200 border-solid rounded-lg p-6">
            <h4 className="text-zinc-800 text-[1.2rem] md:text-[1.64rem] leading-8 font-bold mb-6 hover:text-primary-600 duration-300">
              <a className="cursor-pointer" href="/blog">
                Connect With Customers
              </a>
            </h4>

            <div className="items-center  lg:flex lg:space-y-2">
              <ul className="flex list-disc">
                <li className="h-12 w-12 -mr-3">
                  <img
                    className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/09.jpg"
                    alt=""
                  />
                </li>

                <li className="h-12 w-12">
                  <img
                    className="h-full w-full object-cover align-middle border-2 border-white border-solid rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/10.jpg"
                    alt=""
                  />
                </li>
              </ul>

              <div className="ml-2">
                <h6 className="text-zinc-800 font-bold mb-1">11 articles in this collection</h6>

                <p>
                  Written by <b className="font-bold">Lori Stevens</b> and <b className="font-bold">Samuel Bishop</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularArticle;
