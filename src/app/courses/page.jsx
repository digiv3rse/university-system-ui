import Pagination from "@/components/Common/Pagination";
import CourseLists from "@/components/Screen/Courses/CourseLists";
import Filters from "@/components/Screen/Courses/Filters";
import Hero from "@/components/Screen/Courses/Hero";
import SubscribeBanner from "@/components/Screen/Courses/SubscribeBanner";
import React from "react";

const CoursesPage = () => {
  return (
    <>
      <Hero />
      <Filters />
      <CourseLists />
      <Pagination />
      <SubscribeBanner />
    </>
  );
};

export default CoursesPage;
