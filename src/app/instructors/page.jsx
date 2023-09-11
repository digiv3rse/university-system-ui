import Filters from "@/components/Screen/Instructor/Filters";
import Hero from "@/components/Screen/Instructor/Hero";
import InstructorLists from "@/components/Screen/Instructor/InstructorLists/InstructorLists";
import React from "react";

const InstructorPage = () => {
  return (
    <>
      <Hero />
      <Filters />
      <InstructorLists />
    </>
  );
};

export default InstructorPage;
