import Title from "@/components/Common/Title";
import Image from "next/image";
import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="w-full text-zinc-500 text-[0.94rem] leading-5 px-3.5 text-center">
        <Image width={700} height={500} className="w-full sm:w-[55%] block mx-auto my-8 align-middle overflow-clip" src="/error.svg" alt="" />

        <h1 className="text-rose-600 text-5xl sm:text-6xl md:text-8xl font-bold mb-2">404</h1>

        <Title>Oh no, something went wrong!</Title>

        <p className="my-6">Either something went wrong or this page doesn&apos;t exist anymore.</p>

        <a
          className="bg-sky-600 text-white cursor-pointer inline-block font-medium py-2 px-4 align-middle border border-sky-600 border-solid rounded-md overflow-hidden hover:bg-primary-600"
          href="/"
        >
          Take me to Homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
