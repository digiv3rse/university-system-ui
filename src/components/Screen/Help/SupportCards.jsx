import Link from "next/link";
import React from "react";

const SupportCards = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="text-zinc-500 text-[0.94rem] leading-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-cyan-600/[0.1] rounded-lg p-12">
            <h2 className="text-cyan-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" className="inline-block">
                <g fill="none" fill-rule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    d="M5 11a7 7 0 0 1 14 0v2.035c1.696.243 3 1.702 3 3.465v.25A3.25 3.25 0 0 1 18.75 20A1.75 1.75 0 0 1 17 18.25V11a5 5 0 0 0-10 0v7.25A1.75 1.75 0 0 1 5.25 20A3.25 3.25 0 0 1 2 16.75v-.25a3.5 3.5 0 0 1 3-3.465V11Zm0 4.085A1.5 1.5 0 0 0 4 16.5v.25c0 .605.43 1.11 1 1.225v-2.89Zm14 0v2.89c.57-.116 1-.62 1-1.225v-.25a1.5 1.5 0 0 0-1-1.415Z"
                  />
                </g>
              </svg>
            </h2>

            <h3 className="text-zinc-800 text-3xl font-bold mb-2">Contact Support?</h3>

            <p className="mb-4">Delay death ask to style Me mean able conviction For every delay death ask to style</p>

            <Link
              className="bg-zinc-800 text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-zinc-800 border-solid rounded-md overflow-hidden hover:bg-zinc-600 duration-300"
              href="/"
            >
              Contact Us
            </Link>
          </div>

          <div className="bg-violet-700/[0.1] rounded-lg p-12">
            <h2 className="text-violet-700 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16" className="inline-block">
                <path
                  fill="currentColor"
                  d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5a1.5 1.5 0 1 1 0 3a.5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5a1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13Z"
                />
              </svg>
            </h2>

            <h3 className="text-zinc-800 text-3xl font-bold mb-2">Submit a Ticket</h3>

            <p className="mb-4">Prosperous impression had conviction For every delay death ask to style Me mean able</p>

            <Link
              className="bg-zinc-800 text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-zinc-800 border-solid rounded-md overflow-hidden hover:bg-zinc-600 duration-300"
              href="/"
            >
              Submit Ticket
            </Link>
          </div>

          <div className="bg-amber-400/[0.15] rounded-lg p-12">
            <h2 className="text-amber-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 20 20" className="inline-block">
                <path
                  fill="currentColor"
                  d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5zm-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51c-.13.16-.43.15-.56.05l-4.37-3.73l-2.14 1.95l-2.13-1.95l-4.37 3.73c-.13.1-.43.11-.56-.05c-.14-.15-.06-.37.06-.51l3.9-4.06l-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04l6.25-5.04c.28-.24.62-.4.95-.07z"
                />
              </svg>
            </h2>

            <h3 className="text-zinc-800 text-3xl font-bold mb-2">Request a feature</h3>

            <p className="mb-4">Prosperous impression had conviction For every delay death ask to style Me mean able</p>

            <Link
              className="bg-zinc-800 text-white cursor-pointer inline-block font-medium py-2 px-4 text-center align-middle border border-zinc-800 border-solid rounded-md overflow-hidden hover:bg-zinc-600 duration-300"
              href="/"
            >
              Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCards;
