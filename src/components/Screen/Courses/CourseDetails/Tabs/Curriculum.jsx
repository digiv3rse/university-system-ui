import React from "react";
import CurriculumItem from "./CurriculumItem";

const Curriculum = () => {
  const curriculumData = [
    {
      title: "This is demo title 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quidem culpa atque unde molestias ipsum, excepturi maiores fuga repudiandae nobis tempora laudantium sapiente temporibus omnis.",
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
        return <CurriculumItem key={idx} data={data} />;
      })}
    </div>
  );
};

export default Curriculum;
