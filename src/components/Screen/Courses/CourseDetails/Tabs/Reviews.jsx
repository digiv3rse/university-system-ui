/* eslint-disable @next/next/no-img-element */
import FilterableList from "@/components/Common/FilterableList";
import { StarSVG } from "@/components/Common/SVGCollection";
import React from "react";

const Reviews = () => {
  const reviewRatingNumbers = ["★★★★☆ (4/5)", "★★★☆☆ (3/5)", "★★☆☆☆ (2/5)", "★☆☆☆☆ (1/5)"];

  const handleFilters = (e) => {
    console.log("reviews");
    e.preventDefault();
  };

  return (
    <div className="py-8 px-5">
      <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-6">Our Student Reviews</h5>

      <div className="text-zinc-500 text-[0.94rem] leading-5 break-words px-3.5 md:flex items-start">
        <div className="">
          <div className="mr-6 !w-24 !h-24">
            <img
              className="h-full w-full object-cover align-middle rounded-[50%] overflow-clip"
              src="https://eduport.webestica.com/assets/images/avatar/09.jpg"
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="items-center md:flex">
            <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mr-4">Jacqueline Miller</h5>

            <StarSVG className="flex items-center" />
          </div>

          <p className="text-[0.82rem] mb-2">2 days ago</p>

          <p className="mb-2">
            Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling
            age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.{" "}
          </p>

          <div className="inline-flex relative align-middle rounded-md">
            {/* <input className="h-3 w-3 bottom-[1.33rem] text-black left-0 absolute right-[6.24rem] top-0" type="radio" /> */}

            <label className="hover:bg-gray-300 duration-300 transition ease-in-out rounded-bl rounded-tl text-zinc-800 cursor-pointer flex-grow text-[0.81rem] font-medium py-1.5 px-3 text-center z-[1] border border-gray-300 border-solid overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024" className="inline-block mr-1 -mt-1">
                <path
                  fill="currentColor"
                  fill-opacity=".15"
                  d="M273 495.9v428l.3-428zm538.2-88.3H496.8l9.6-198.4c.6-11.9-4.7-23.1-14.6-30.5c-6.1-4.5-13.6-6.8-21.1-6.7c-19.6.1-36.9 13.4-42.2 32.3c-37.1 134.4-64.9 235.2-83.5 302.5V852h399.4a56.85 56.85 0 0 0 33.6-51.8c0-9.7-2.3-18.9-6.9-27.3l-13.9-25.4l21.9-19a56.76 56.76 0 0 0 19.6-43c0-9.7-2.3-18.9-6.9-27.3l-13.9-25.4l21.9-19a56.76 56.76 0 0 0 19.6-43c0-9.7-2.3-18.9-6.9-27.3l-14-25.5l21.9-19a56.76 56.76 0 0 0 19.6-43c0-19.1-11-37.5-28.8-48.4z"
                />
                <path
                  fill="currentColor"
                  d="M112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32zm773.9 5.7c16.8-22.2 26.1-49.4 26.1-77.7c0-44.9-25.1-87.5-65.5-111a67.67 67.67 0 0 0-34.3-9.3H572.3l6-122.9c1.5-29.7-9-57.9-29.5-79.4a106.4 106.4 0 0 0-77.9-33.4c-52 0-98 35-111.8 85.1l-85.8 310.8l-.3 428h472.1c9.3 0 18.2-1.8 26.5-5.4c47.6-20.3 78.3-66.8 78.3-118.4c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37zM820.4 499l-21.9 19l14 25.5a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.1 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.1 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H345V506.8c18.6-67.2 46.4-168 83.5-302.5a44.28 44.28 0 0 1 42.2-32.3c7.5-.1 15 2.2 21.1 6.7c9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.1 32.2-19.6 43z"
                />
              </svg>
              25
            </label>

            {/* <input className="h-3 w-3 bottom-[1.33rem] text-black left-0 absolute right-[6.24rem] top-0" type="radio" /> */}

            <label className="hover:bg-gray-300 duration-300 transition ease-in-out rounded-br rounded-tr cursor-pointer flex-grow text-[0.81rem] font-medium py-1.5 px-3 text-center border border-gray-300 border-solid overflow-hidden">
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-1 -mt-1">
                <path
                  fill="currentColor"
                  d="M19 15V3h4v12h-4M15 3a2 2 0 0 1 2 2v10c0 .55-.22 1.05-.59 1.41L9.83 23l-1.06-1.06c-.27-.27-.44-.64-.44-1.06l.03-.31l.95-4.57H3a2 2 0 0 1-2-2v-2c0-.26.05-.5.14-.73l3.02-7.05C4.46 3.5 5.17 3 6 3h9m0 2H5.97L3 12v2h8.78l-1.13 5.32L15 14.97V5Z"
                />
              </svg>
              2
            </label>
          </div>
        </div>
      </div>

      <hr className="my-10" />
      {/* give a review */}
      {ReviewForm(handleFilters, reviewRatingNumbers)}
    </div>
  );
};

export default Reviews;

// ================================ Review form
function ReviewForm(handleFilters, reviewRatingNumbers) {
  return (
    <div className="text-zinc-500 text-[0.94rem] leading-5 break-words">
      <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-6">Leave a Review</h5>

      <form className="" onSubmit={handleFilters}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {" "}
          <div className="mt-4 px-2">
            <input
              className="w-full h-10 bg-slate-100 text-zinc-700 cursor-text py-2 px-4 border border-slate-100 border-solid rounded-md"
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="mt-4 px-2">
            <input
              className="w-full h-10 bg-slate-100 text-zinc-700 cursor-text py-2 px-4 border border-slate-100 border-solid rounded-md"
              placeholder="Email"
              type="email"
            />
          </div>
        </div>

        <div className="w-full mt-4 px-2">
          <div className="w-full bg-slate-100 text-zinc-700 cursor-text border border-slate-100 border-solid rounded-md">
            <FilterableList items={reviewRatingNumbers} title="★★★★★ (5/5)" />
          </div>
        </div>

        <div className="w-full mt-4 px-2">
          <textarea className="w-full h-20 bg-slate-100 text-zinc-700 cursor-text min-h-[2.53rem] py-2 px-4 resize-y border border-slate-100 border-solid rounded-md overflow-auto" />
        </div>

        <div className="w-full mt-4 px-2">
          <button className="items-start bg-primary-600 text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-primary-600 border-solid rounded-md overflow-hidden hover:text-primary-600 hover:bg-white hover:border-primary-600 duration-300 transition ease-in-out">
            Post Review
          </button>
        </div>
      </form>
    </div>
  );
}
