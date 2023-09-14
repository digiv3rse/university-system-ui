/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const EventDetails = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-8">
        <div className="lg:col-span-2">
          {/* ================== */}
          {OrganizedDetails()}
          {/* ========================= */}

          {EventAboutContent()}

          {/* ==================== */}
          {InstructorOfEvents()}
        </div>
        <div>2</div>
      </div>
    </div>
  );
};

export default EventDetails;

// ============================= instructors event

function InstructorOfEvents() {
  return (
    <div className="mt-10">
      <h4 className="text-zinc-800 text-[1.64rem] leading-8 font-bold">Speakers</h4>
      <p className="text-zinc-500 text-[0.94rem] leading-5">
        Understand that theory is important to build a solid foundation, we understand that theory alone
      </p>
      {/* ========= */}
      <div className="text-zinc-500 text-[0.94rem] leading-5 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-6">
        <div className="">
          <div className="bg-white flex flex-col flex-grow break-words py-4 px-5 border border-gray-100 border-solid rounded-lg">
            <div className="items-center flex justify-between">
              <div className="items-center self-stretch gap-2 flex">
                <div className="h-12 w-12">
                  <img
                    className="h-full w-full object-cover align-middle rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/08.jpg"
                    alt=""
                  />
                </div>

                <div>
                  <h6 className="text-zinc-800 font-bold">
                    <Link className="cursor-pointer" href="#">
                      Dennis Barrett
                    </Link>
                  </h6>

                  <small className="text-[0.82rem]">2.5M followers</small>
                </div>
              </div>

              <Link href="/instructors/id">
                <button className="items-start bg-zinc-800 hover:bg-zinc-600 duration-300 transition ease-in-out text-white cursor-pointer text-[0.81rem] font-medium py-1.5 px-3 text-center align-middle border border-zinc-800 border-solid rounded overflow-hidden">
                  Know more
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-white flex flex-col flex-grow break-words py-4 px-5 border border-gray-100 border-solid rounded-lg">
            <div className="items-center flex justify-between">
              <div className="items-center self-stretch gap-2 flex">
                <div className="h-12 w-12">
                  <img
                    className="h-full w-full object-cover align-middle rounded-full overflow-clip"
                    src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
                    alt=""
                  />
                </div>

                <div>
                  <h6 className="text-zinc-800 font-bold">
                    <Link className="cursor-pointer" href="#">
                      Jacqueline Miller
                    </Link>
                  </h6>

                  <small className="text-[0.82rem]">40K followers</small>
                </div>
              </div>

              <Link href="/instructors/id">
                <button className="items-start bg-zinc-800 hover:bg-zinc-600 duration-300 transition ease-in-out text-white cursor-pointer text-[0.81rem] font-medium py-1.5 px-3 text-center align-middle border border-zinc-800 border-solid rounded overflow-hidden">
                  Know more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================================ about event

function EventAboutContent() {
  return (
    <div className="mt-8">
      <h4 className="text-zinc-800 text-[1.64rem] leading-8 font-bold">About this event</h4>
      <p className="text-zinc-500 text-[0.94rem] leading-5 mt-3">
        Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed and in equally totally if. Delivered
        dejection necessary objection do Mr prevailed. Mr feeling chiefly cordial in doing.
      </p>
      <p className="text-zinc-500 text-[0.94rem] leading-5 mt-4">
        We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded
        Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the
        job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.
      </p>
    </div>
  );
}

// ============================================ date time location details
function OrganizedDetails() {
  return (
    <div className="bg-slate-100 text-zinc-500 text-[0.94rem] leading-5 rounded-lg p-4">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="px-3">
          <h6 className="text-zinc-800 text-[0.82rem] mb-2">Organized by:</h6>

          <div className="items-center flex">
            <div className="h-12 w-12 relative align-middle">
              <div className="h-full w-full bg-rose-600 object-cover rounded">
                <span className="text-white flex items-center justify-center h-full">ZC</span>
              </div>
            </div>

            <div className="ml-2">
              <h6 className="text-zinc-800 font-bold">Zodiac Event Inc.</h6>

              <small className="text-[0.82rem]">2.4k followers</small>
            </div>
          </div>
        </div>

        <div className=" px-3">
          <h6 className="text-zinc-800 text-[0.82rem] mb-2">Location:</h6>

          <div className="items-center flex xl:justify-between">
            <div className="h-12 w-12 relative align-middle">
              <div className="h-full w-full bg-zinc-800 object-cover rounded-md">
                <span className="text-white flex items-center justify-center h-full ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block">
                    <path
                      fill="currentColor"
                      d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <h6 className="text-zinc-800 font-medium ml-2 w-48">Chicago HQ Estica Cop. Macomb, MI 48042</h6>
          </div>
        </div>

        <div className="px-3">
          <h6 className="text-zinc-800 text-[0.82rem] mb-2">Date & Time:</h6>

          <div className="items-center flex">
            <div className="h-12 w-12 relative align-middle">
              <div className="h-full w-full bg-zinc-800 object-cover rounded-md">
                <span className="text-white flex items-center justify-center h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block">
                    <path
                      fill="currentColor"
                      d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2v8zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="ml-2">
              <h6 className="text-zinc-800 font-medium">01 Jan 2023</h6>

              <small className="text-[0.82rem]">9am to 7pm Daylight Time</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
