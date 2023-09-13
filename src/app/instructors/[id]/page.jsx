import InstructorAbout from "@/components/Screen/Instructor/InstructorDetails/InstructorAbout";
import InstructorImage from "@/components/Screen/Instructor/InstructorDetails/InstructorImage";
import InstructorIntro from "@/components/Screen/Instructor/InstructorDetails/InstructorIntro";
import React from "react";

const InstructorDetailsPage = () => {
  return (
    <section className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-8">
        <div className="space-y-8">
          <InstructorImage />
          <InstructorAbout />
        </div>
        <div className="lg:col-span-2 h-auto">
          <InstructorIntro />
        </div>
      </div>
    </section>
  );
};

export default InstructorDetailsPage;
