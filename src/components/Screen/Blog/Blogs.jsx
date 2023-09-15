import React from "react";
import Blog from "./Blog";
import { blogs } from "../../../../data/blogs";

const Blogs = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 ">
        {blogs.map((blog, idx) => (
          <Blog key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
