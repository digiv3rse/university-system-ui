import React from "react";

const CourseTabs = ({ tabOpen, setTabOpen }) => {
  return (
    <div>
      <div className="bg-white border-b rounded-tl-lg rounded-tr-lg text-zinc-500 text-[0.94rem] leading-5 break-words py-4 px-6 border-gray-200/60 border-solid">
        <ul className="flex flex-wrap">
          <li className="list-item -mb-1 mr-6">
            <button
              onClick={() => setTabOpen("Overview")}
              className={`items-start ${
                tabOpen === "Overview" ? "bg-sky-600/[0.1] text-primary-600" : "bg-white  text-primary-600"
              } cursor-pointer py-2 px-4 text-center rounded-md`}
            >
              Overview
            </button>
          </li>

          <li className="list-item -mb-1 mr-6">
            <button
              onClick={() => setTabOpen("Curriculum")}
              className={`items-start ${
                tabOpen === "Curriculum" ? "bg-sky-600/[0.1] text-primary-600" : "bg-white  text-primary-600"
              } cursor-pointer py-2 px-4 text-center rounded-md`}
            >
              Curriculum
            </button>
          </li>

          <li className="list-item -mb-1 mr-6">
            <button
              onClick={() => setTabOpen("Instructor")}
              className={`items-start ${
                tabOpen === "Instructor" ? "bg-sky-600/[0.1] text-primary-600" : "bg-white  text-primary-600"
              } cursor-pointer py-2 px-4 text-center rounded-md`}
            >
              Instructor
            </button>
          </li>

          <li className="list-item -mb-1 mr-6">
            <button
              onClick={() => setTabOpen("Reviews")}
              className={`items-start ${
                tabOpen === "Reviews" ? "bg-sky-600/[0.1] text-primary-600" : "bg-white  text-primary-600"
              } cursor-pointer py-2 px-4 text-center rounded-md`}
            >
              Reviews
            </button>
          </li>

          {/*     <li className="list-item -mb-1 mr-6">
            <button
              onClick={() => setTabOpen("FAQs")}
              className={`items-start ${
                tabOpen === "FAQs" ? "bg-sky-600/[0.1] text-primary-600" : "bg-white  text-primary-600"
              } cursor-pointer py-2 px-4 text-center rounded-md`}
            >
              FAQs{" "}
            </button>
          </li> */}

          {/*   <li className="list-item -mb-1 mr-6">
            <button
              onClick={() => setTabOpen("Comment")}
              className={`items-start ${
                tabOpen === "Comment" ? "bg-sky-600/[0.1] text-primary-600" : "bg-white  text-primary-600"
              } cursor-pointer py-2 px-4 text-center rounded-md`}
            >
              Comment
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default CourseTabs;
