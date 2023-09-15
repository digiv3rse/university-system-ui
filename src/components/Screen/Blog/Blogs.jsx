import React from "react";
import Blog from "./Blog";
import { courses } from "../../../../data/coursesData";

const Blogs = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 ">
        {courses.map((course, idx) => (
          <Blog key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
