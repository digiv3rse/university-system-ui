"use client";

import Link from "next/link";
import React from "react";
import { Collapse } from "react-collapse";

const CurriculumItem = ({ open, toggle, data }) => {
  return (
    <div className="pt-4">
      <div onClick={toggle}>
        <div className="w-full bg-slate-100 cursor-pointer flex text-[0.94rem] leading-5  break-words py-4 px-5 rounded-md items-center justify-between">
          <p>
            <span className="text-black font-bold">{data.title}</span>
            <span className="text-[0.82rem] ml-2 text-zinc-500">({data.lecture} Lectures)</span>
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

      <Collapse isOpened={open}>
        <div className="p-4 space-y-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="items-center text-zinc-500 flex text-[0.94rem] leading-5 justify-between break-words">
              <div className="items-center flex">
                <Link
                  className="h-10 w-10 bg-rose-600/[0.1] text-rose-600 cursor-pointer text-[0.81rem] font-medium text-center align-middle border border-solid rounded-full overflow-hidden flex items-center justify-center"
                  href="#"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="inline-block pl-1">
                    <path
                      fill="currentColor"
                      d="m11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    />
                  </svg>
                </Link>

                <span className="text-zinc-800 ml-2 text-ellipsis overflow-hidden font-bold"> {data.desc}</span>
              </div>

              <p className="text-ellipsis overflow-hidden">
                {data.minute}m {data.second}s
              </p>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default CurriculumItem;
