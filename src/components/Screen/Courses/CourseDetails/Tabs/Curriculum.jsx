import React, { useState } from "react";
import CurriculumItem from "./CurriculumItem";
import { curriculumData } from "../../../../../../data/curriculumData";

const Curriculum = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="py-8 px-5">
      {curriculumData.map((data, idx) => {
        return <CurriculumItem key={idx} data={data} open={idx === open} toggle={() => toggle(idx)} />;
      })}
    </div>
  );
};

export default Curriculum;
