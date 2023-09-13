"use client";

import CourseDetailsHero from "@/components/Screen/Courses/CourseDetails/CHero";
import CourseCard from "@/components/Screen/Courses/CourseDetails/CourseCard";
import CourseLessons from "@/components/Screen/Courses/CourseDetails/CourseLessons";
import CourseTabs from "@/components/Screen/Courses/CourseDetails/CourseTabs";
import CourseTags from "@/components/Screen/Courses/CourseDetails/CourseTags";
import RecentViewsCourse from "@/components/Screen/Courses/CourseDetails/RecentViewsCourse";
import Curriculum from "@/components/Screen/Courses/CourseDetails/Tabs/Curriculum";
import Instructor from "@/components/Screen/Courses/CourseDetails/Tabs/Instructor";
import Overview from "@/components/Screen/Courses/CourseDetails/Tabs/Overview";
import Reviews from "@/components/Screen/Courses/CourseDetails/Tabs/Reviews";
import TopListedCourses from "@/components/Screen/Courses/CourseDetails/TopListedCourses";
import React, { useState } from "react";

const CourseDetailsPage = () => {
  const [tabOpen, setTabOpen] = useState("Overview");

  return (
    <>
      <CourseDetailsHero />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-8">
        <div className=" bg-white rounded-lg  lg:col-span-2 shadow-3xl">
          <CourseTabs tabOpen={tabOpen} setTabOpen={setTabOpen} />
          {tabOpen === "Overview" ? <Overview /> : ""}
          {tabOpen === "Curriculum" ? <Curriculum /> : ""}
          {tabOpen === "Instructor" ? <Instructor /> : ""}
          {tabOpen === "Reviews" ? <Reviews /> : ""}
        </div>
        <div className="space-y-6">
          <section>
            <CourseCard />
          </section>
          <section>
            {" "}
            <CourseLessons />
          </section>
          <section>
            {" "}
            <RecentViewsCourse />
          </section>
          <section>
            <CourseTags />
          </section>
        </div>
      </div>
      <TopListedCourses />
    </>
  );
};

export default CourseDetailsPage;
