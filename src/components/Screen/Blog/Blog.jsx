/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="text-zinc-500 text-[0.94rem] leading-5">
      <div className="break-words rounded-lg">
        <div className="rounded-lg overflow-hidden relative">
          <img className="w-full h-full align-middle rounded-lg overflow-clip object-fill object-center" src={blog.imageSrc} alt="" />

          <div className="items-start flex left-0 absolute top-0 z-[2] rounded-lg p-4 w-full h-full bg-black/40">
            <Link
              style={{ backgroundColor: blog.bg_tag }}
              className="text-white cursor-pointer text-[0.80rem] py-1 px-2 text-center rounded-md"
              href="#"
            >
              {blog.tag}
            </Link>
          </div>
        </div>

        <div className="flex-grow py-4 px-5">
          <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-2 hover:text-primary-600 duration-300 transition ease-in-out">
            <Link className="cursor-pointer" href="/blog/id">
              {blog.title.slice(0, 20)}...
            </Link>
          </h5>

          <p
            className="mb-4 text-ellipsis overflow-hidden"
            style={{
              display: "-webkit-box",
            }}
          >
            {blog.description.slice(0, 60)}...
          </p>

          <div className="flex justify-between">
            <h6 className="text-zinc-800 font-bold hover:text-primary-600 duration-300 transition ease-in-out">
              <Link className="cursor-pointer" href="/instructors/id">
                {blog.author}
              </Link>
            </h6>

            <span className="text-[0.82rem]">{blog.issueDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
