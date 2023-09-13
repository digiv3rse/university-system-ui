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
      title: "This is demo title 2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quidem culpa atque unde molestias ipsum, excepturi maiores fuga repudiandae nobis tempora laudantium sapiente temporibus omnis.",
    },
    {
      title: "This is demo title 3",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quidem culpa atque unde molestias ipsum, excepturi maiores fuga repudiandae nobis tempora laudantium sapiente temporibus omnis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quidem culpa atque unde molestias ipsum, excepturi maiores fuga repudiandae nobis tempora laudantium sapiente temporibus omnis.",
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
