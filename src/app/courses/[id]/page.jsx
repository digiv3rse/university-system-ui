import CourseDetailsHero from "@/components/Screen/Courses/CourseDetails/CHero";
import CourseCard from "@/components/Screen/Courses/CourseDetails/CourseCard";
import CourseLessons from "@/components/Screen/Courses/CourseDetails/CourseLessions";
import CourseTabs from "@/components/Screen/Courses/CourseDetails/CourseTabs";
import CourseTags from "@/components/Screen/Courses/CourseDetails/CourseTags";
import RecentViewsCourse from "@/components/Screen/Courses/CourseDetails/RecentViewsCourse";
import TopListedCourses from "@/components/Screen/Courses/CourseDetails/TopListedCourses";
import React from "react";

const CourseDetailsPage = () => {
  return (
    <>
      <CourseDetailsHero />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-8">
        <div className=" bg-white rounded-lg p-4 lg:col-span-2 shadow-3xl">
          <CourseTabs />
        </div>
        <div>
          <CourseCard />
          <CourseLessons />
          <RecentViewsCourse />
          <CourseTags />
        </div>
      </div>
      <TopListedCourses />
    </>
  );
};

export default CourseDetailsPage;
