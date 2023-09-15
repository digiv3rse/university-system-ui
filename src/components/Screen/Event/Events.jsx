import Image from "next/image";
import Link from "next/link";
import React from "react";
import { events } from "../../../../data/events";

const Events = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 ">
        {events.slice(0, 8).map(({ blog_image, title, description, date }, idx) => (
          <div key={idx} className="shadow-3xl rounded-lg">
            <div className="text-zinc-500 inline-block flex-col text-[0.94rem] leading-5 break-words relative align-top rounded-lg">
              <div className="relative overflow-hidden">
                <Image className="w-full h-full align-middle rounded-lg overflow-clip object-fill object-center" src={blog_image} alt="" />

                <div className="items-start bottom-0 flex flex-col right-0 absolute top-0 z-[2] rounded-lg p-4">
                  <div className="w-full flex justify-end mb-auto">
                    <Link className="h-6 w-6 bg-white text-sky-600 cursor-pointer rounded-md" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart text-rose-600 inline-block ml-1"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </Link>
                  </div>

                  <div className="w-full mt-auto">
                    <Link className="bg-white text-black cursor-pointer inline-block py-1.5 px-2 text-center rounded" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar-days text-orange-500 inline-block mr-2 -mt-1"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="M8 14h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 18h.01" />
                        <path d="M12 18h.01" />
                        <path d="M16 18h.01" />
                      </svg>
                      {date}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-grow p-3">
                <h5 className="text-zinc-800 text-[20px] lg:text-[1.31rem] leading-snug font-bold mb-2 hover:text-primary-500 duration-300 transition ease-in-out">
                  <Link className="cursor-pointer" href="/event/id">
                    {title}
                  </Link>
                </h5>

                <p
                  className="text-ellipsis overflow-hidden"
                  style={{
                    display: "-webkit-box",
                  }}
                >
                  {description}...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
