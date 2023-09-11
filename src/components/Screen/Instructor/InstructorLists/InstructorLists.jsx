import React from "react";
import InstructorList from "./InstructorList";

const InstructorLists = () => {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1  xl:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <InstructorList key={idx} />
        ))}
      </div>
    </section>
  );
};

export default InstructorLists;
