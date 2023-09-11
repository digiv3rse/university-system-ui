import React from "react";
import InstructorList from "./InstructorList";
import { instructorsDetail } from "../../../../../data/instructors";

const InstructorLists = () => {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1  xl:grid-cols-2 gap-6">
        {instructorsDetail.map((instructor, idx) => (
          <InstructorList key={idx} instructor={instructor} />
        ))}
      </div>
    </section>
  );
};

export default InstructorLists;
