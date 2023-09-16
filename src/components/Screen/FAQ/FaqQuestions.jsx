"use client";

import React, { useState } from "react";
import { faqQuestions } from "../../../../data/faqQuestions";
import AccordionItem from "../Shared/AccordionItem";

const FaqQuestions = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="mt-3">
      {faqQuestions.map((data, idx) => {
        return <AccordionItem key={idx} data={data} open={idx === open} toggle={() => toggle(idx)} />;
      })}
    </div>
  );
};

export default FaqQuestions;
