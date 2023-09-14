/* eslint-disable @next/next/no-img-element */
import Title from "@/components/Common/Title";
import React from "react";
import { languages } from "../../../../data/languages";
import Link from "next/link";

const ChooseLanguage = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="text-center mb-8">
        <Title>Choose Languages</Title>
      </div>

      {/* ============================== language grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {languages.map(({ imageSrc, lang_name }, idx) => (
          <div key={idx} className="text-zinc-500 text-[0.94rem] leading-5 px-3">
            {Language(imageSrc, lang_name)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseLanguage;

// ====================================== language
function Language(imageSrc, lang_name) {
  return (
    <div className="items-center bg-slate-100 flex justify-center rounded-md p-4">
      <img className="h-10 w-16 mr-4 align-middle overflow-clip" src={imageSrc} alt="" />

      <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold hover:text-primary-600">
        <Link className=" cursor-pointer" href="#">
          {lang_name}
        </Link>
      </h5>
    </div>
  );
}
