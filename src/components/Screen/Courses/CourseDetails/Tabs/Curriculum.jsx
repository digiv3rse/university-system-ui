import React, { useState } from "react";
import CurriculumItem from "./CurriculumItem";

const Curriculum = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };
  const curriculumData = [
    {
      title: "Introduction of Digital Marketing",
      desc: "Introduction",
      lecture: "3",
      minute: "2",
      second: "10",
    },
    {
      title: "Customer Life cycle",
      desc: "What is digital marketing",
      lecture: "4",
      minute: "11",
      second: "20",
    },
    {
      title: "Introduction of Digital Marketing",
      desc: "Introduction",
      lecture: "3",
      minute: "2",
      second: "10",
    },
  ];

  return (
    <div className="py-8 px-5">
      {curriculumData.map((data, idx) => {
        return <CurriculumItem key={idx} data={data} open={idx === open} toggle={() => toggle(idx)} />;
      })}
    </div>
  );
};

export default Curriculum;
