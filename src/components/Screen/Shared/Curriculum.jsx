import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { curriculumData } from "../../../../data/curriculumData";

const Accordion = () => {
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
        return <AccordionItem key={idx} data={data} open={idx === open} toggle={() => toggle(idx)} />;
      })}
    </div>
  );
};

export default Accordion;
