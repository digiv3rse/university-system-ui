"use client";

import React, { useState } from "react";
import AccordionItem from "../../Shared/AccordionItem";
import { eventSchedules } from "../../../../../data/eventSchedules";

const EventSchedule = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="py-8">
      {eventSchedules.map((data, idx) => {
        return <AccordionItem key={idx} data={data} open={idx === open} toggle={() => toggle(idx)} />;
      })}
      {/* ================= */}
      <div className="bg-slate-100 text-zinc-500 flex flex-col flex-grow text-[0.94rem] leading-5 break-words rounded-lg p-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
                />
              </svg>

              <div className="ml-4">
                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">125</h5>

                <p>Visitors</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4Z"
                />
              </svg>

              <div className="ml-4">
                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">356</h5>

                <p>Registered</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"
                />
              </svg>

              <div className="ml-4">
                <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">350</h5>

                <p>Attendance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
