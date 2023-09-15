"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";

const Comments = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="text-zinc-500 text-[0.94rem] leading-5">
          <h3 className="text-zinc-800 text-3xl font-bold mb-2">3 comments</h3>

          <div className="flex my-6">
            <img
              className="h-12 w-12 mr-4 align-middle rounded-full overflow-clip"
              src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
              alt=""
            />

            <div>
              <div className="mb-2">
                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">Frances Guerrero</h5>

                <span className="text-[0.82rem] mr-4">June 11, 2021 at 6:01 am</span>
              </div>

              <p className="mb-4">
                Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if.
                Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.
              </p>

              <a
                className="bg-slate-100 text-zinc-950 cursor-pointer inline-block text-[0.81rem] font-medium py-1.5 px-3 text-center align-middle border border-slate-100 border-solid rounded overflow-hidden"
                href="/"
              >
                Reply
              </a>
            </div>
          </div>

          <div className="flex my-6 pl-6">
            <img
              className="h-12 w-12 mr-4 align-middle rounded-full overflow-clip"
              src="https://eduport.webestica.com/assets/images/avatar/02.jpg"
              alt=""
            />

            <div>
              <div className="mb-2">
                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">Louis Ferguson</h5>

                <span className="text-[0.82rem] mr-4">June 11, 2021 at 6:55 am</span>
              </div>

              <p className="mb-4">
                Water timed folly right aware if oh truth. Imprudence attachment him for sympathize. Large above be to means. Dashwood does provide
                stronger is. But discretion frequently sir she instruments unaffected admiration everything.
              </p>

              <a
                className="bg-slate-100 text-zinc-950 cursor-pointer inline-block text-[0.81rem] font-medium py-1.5 px-3 text-center align-middle border border-slate-100 border-solid rounded overflow-hidden"
                href="/"
              >
                Reply
              </a>
            </div>
          </div>

          <div className="flex my-6 pl-12">
            <img
              className="h-12 w-12 mr-4 align-middle rounded-full overflow-clip"
              src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
              alt=""
            />

            <div>
              <div className="mb-2">
                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">Frances Guerrero</h5>

                <span className="text-[0.82rem] mr-4">June 12, 2021 at 7:30 am</span>
              </div>

              <p className="mb-4">Water timed folly right aware if oh truth.</p>

              <a
                className="bg-slate-100 text-zinc-950 cursor-pointer inline-block text-[0.81rem] font-medium py-1.5 px-3 text-center align-middle border border-slate-100 border-solid rounded overflow-hidden"
                href="/"
              >
                Reply
              </a>
            </div>
          </div>

          <div className="flex my-6">
            <img
              className="h-12 w-12 mr-4 align-middle rounded-full overflow-clip"
              src="https://eduport.webestica.com/assets/images/avatar/04.jpg"
              alt=""
            />

            <div>
              <div className="mb-2">
                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">Judy Nguyen</h5>

                <span className="text-[0.82rem] mr-4">June 18, 2021 at 11:55 am</span>
              </div>

              <p className="mb-4">
                Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her.
                Concluded boy perpetual old supposing. Farther-related bed and passage comfort civilly.
              </p>

              <a
                className="bg-slate-100 text-zinc-950 cursor-pointer inline-block text-[0.81rem] font-medium py-1.5 px-3 text-center align-middle border border-slate-100 border-solid rounded overflow-hidden"
                href="/"
              >
                Reply
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-zinc-500 text-[0.94rem] leading-5">
          <h3 className="text-zinc-800 text-3xl font-bold mb-2">Your Views Please!</h3>

          <small className="text-[0.82rem]">Your email address will not be published. Required fields are marked *</small>

          <form onSubmit={(e) => e.preventDefault()} className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="mt-4 px-2">
                <label className="inline-block mb-2">Name *</label>

                <input
                  className="w-full h-10 bg-white text-zinc-700 cursor-text py-2 px-4 border border-zinc-200 border-solid rounded-md"
                  type="text"
                  required
                />
              </div>

              <div className="mt-4 px-2">
                <label className="inline-block mb-2">Email *</label>

                <input
                  className="w-full h-10 bg-white text-zinc-700 cursor-text py-2 px-4 border border-zinc-200 border-solid rounded-md"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="w-full mt-4 px-2">
              <label className="inline-block mb-2">Your Comment *</label>

              <textarea className="w-full h-20 bg-white text-zinc-700 cursor-text min-h-[2.53rem] break-words py-2 px-4 resize-y border border-zinc-200 border-solid rounded-md overflow-auto" />
            </div>

            <div className="w-full mt-4 px-2">
              <button className="items-start bg-sky-600 text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-sky-600 border-solid rounded-md overflow-hidden hover:bg-primary-600 duration-300">
                Post comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Comments;
