import React from "react";

const CurriculumItem = ({ open, toggle, data }) => {
  return (
    <div className="pt-4">
      <div onClick={toggle}>
        <div className="w-full bg-slate-100 cursor-pointer flex text-[0.94rem] leading-5  break-words py-4 px-5 rounded-md items-center justify-between">
          <p>
            <span className="text-black font-bold">{data.title}</span>
            <span className="text-[0.82rem] ml-2 text-zinc-500">(4 Lectures)</span>
          </p>
          <div>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 13H5v-2h14v2Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumItem;
