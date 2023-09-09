"use client";
import Title from "@/components/Common/Title";
import React from "react";

const FormDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-zinc-500 text-[0.94rem] leading-5">
      <Title>Let&apos;s talk</Title>

      <p className="my-4">
        To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="inline-block mb-2">Your name *</label>

          <input
            className="w-full h-12 bg-slate-100 text-zinc-700 cursor-text min-h-[2.98rem] py-3 px-6 border border-slate-100 border-solid rounded-md"
            type="text"
          />
        </div>

        <div className="mb-6">
          <label className="inline-block mb-2">Email address *</label>

          <input
            className="w-full h-12 bg-slate-100 text-zinc-700 cursor-text min-h-[2.98rem] py-3 px-6 border border-slate-100 border-solid rounded-md"
            type="email"
          />
        </div>

        <div className="mb-6">
          <label className="inline-block mb-2">Message *</label>

          <textarea className="w-full h-28 bg-slate-100 text-zinc-700 cursor-text min-h-[2.53rem] break-words py-2 px-4 resize-y border border-slate-100 border-solid rounded-md overflow-auto" />
        </div>

        <div className="grid">
          <button className="items-start bg-sky-600 text-white cursor-pointer font-medium py-3 px-6 text-center align-middle border border-sky-600 border-solid rounded-lg overflow-hidden hover:bg-primary-600 duration-300 transition">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDetails;
