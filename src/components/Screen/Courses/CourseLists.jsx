import React from "react";
import CourseList from "./CourseList";
import { courses } from "../../../../data/coursesData";

const CourseLists = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 ">
        {courses.map((course, idx) => (
          <CourseList key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseLists;
