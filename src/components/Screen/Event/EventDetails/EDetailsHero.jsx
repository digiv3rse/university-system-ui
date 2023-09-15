import React from "react";

const EDetailsHero = () => {
  return (
    <section>
      <div className="w-full text-zinc-500 text-[0.94rem] leading-5">
        <div
          className=" bg-white flex flex-col break-words relative rounded-lg overflow-hidden w-full h-[400px] xl:h-[600px]"
          style={{
            backgroundImage: 'url("https://eduport.webestica.com/assets/images/bg/08.jpg")',
            backgroundPosition: "0% 50%",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-black/40 h-full items-start bottom-0 flex flex-col left-0 absolute top-0 z-[2] rounded-lg lg:p-5">
            <div className="absolute right-5 top-5">
              <button className=" bg-white hover:bg-slate-200 duration-300 transition ease-in-out items-start text-zinc-800 cursor-pointer text-[0.81rem] font-medium py-1.5 px-3 text-center align-middle border border-white border-solid rounded overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-1 -mt-1">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                    <path strokeLinecap="round" d="M14 6.5L9 10m5 7.5L9 14" />
                    <path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                  </g>
                </svg>{" "}
                Share
              </button>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap p-4">
                <div className="w-full md:w-[91%] xl:w-[60%] px-3.5">
                  <h1 className="text-white text-[28px] sm:text-[30px] md:text-[36px] lg:text-[2.8rem] leading-snug font-bold mb-2">
                    Host local tours to familiarize students.
                  </h1>

                  <p className="text-white">
                    Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective
                    arranging rapturous did believe him all had supported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EDetailsHero;
