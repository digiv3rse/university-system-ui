import CourseLists from "@/components/Screen/Courses/CourseLists";
import Filters from "@/components/Screen/Courses/Filters";
import Hero from "@/components/Screen/Courses/Hero";
import React from "react";

const CoursesPage = () => {
  return (
    <>
      <Hero />
      <Filters />
      <CourseLists />
    </>
  );
};

export default CoursesPage;
