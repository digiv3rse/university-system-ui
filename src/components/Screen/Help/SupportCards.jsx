import React from "react";

const SupportCards = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="text-zinc-500 text-[0.94rem] leading-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="">
            <div className="bg-cyan-600/[0.1] rounded-lg p-12">
              <h2 className="text-cyan-600 mb-2">
                <i />
              </h2>

              <h3 className="text-zinc-800 text-3xl font-bold mb-2">Contact Support?</h3>

              <p className="mb-4">Delay death ask to style Me mean able conviction For every delay death ask to style</p>

              <a
                className="bg-zinc-800 text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-zinc-800 border-solid rounded-md overflow-hidden"
                href="/"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="">
            <div className="bg-violet-700/[0.1] rounded-lg p-12">
              <h2 className="text-violet-700 mb-2">
                <i className="inline-block" />
              </h2>

              <h3 className="text-zinc-800 text-3xl font-bold mb-2">Submit a Ticket</h3>

              <p className="mb-4">Prosperous impression had conviction For every delay death ask to style Me mean able</p>

              <a
                className="bg-zinc-800 text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-zinc-800 border-solid rounded-md overflow-hidden"
                href="/"
              >
                Submit Ticket
              </a>
            </div>
          </div>

          <div className="">
            <div className="bg-amber-400/[0.15] rounded-lg p-12">
              <h2 className="text-amber-400 mb-2">
                <i />
              </h2>

              <h3 className="text-zinc-800 text-3xl font-bold mb-2">Request a feature</h3>

              <p className="mb-4">Prosperous impression had conviction For every delay death ask to style Me mean able</p>

              <a
                className="bg-zinc-800 text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-zinc-800 border-solid rounded-md overflow-hidden"
                href="/"
              >
                Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCards;
