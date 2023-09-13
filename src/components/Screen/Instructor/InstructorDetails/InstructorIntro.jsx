import Title from "@/components/Common/Title";
import React from "react";

const InstructorIntro = () => {
  return (
    <section className="">
      <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold">Hi, I am</h5>
      <Title>Lori Stevens</Title>
      <p className="text-zinc-500 text-[0.94rem] leading-5 mt-2">Graphic Designer</p>
      <div className="space-y-4 pt-8">
        {" "}
        <p className="text-zinc-500 text-[0.94rem] leading-5">
          Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered
          dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.
        </p>
        <p className="text-zinc-500 text-[0.94rem] leading-5">
          We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded
          Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the
          job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.
        </p>
      </div>

      {/* address */}
      <ul className="mt-6 space-y-2">
        <li className="rounded-tl-md rounded-tr-md text-zinc-500 text-[0.94rem] leading-5 py-1.5">
          <span className="text-zinc-800 mb-2 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-2">
              <path
                fill="#066ac9"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
              />
            </svg>
            Address:
          </span>

          <span className="mr-1">2002 Horton Ford Rd, Eidson, TN, 37731</span>
        </li>
        <li className="text-zinc-500 text-[0.94rem] leading-5 py-1.5">
          <span className="text-zinc-800 mb-2 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-2">
              <path
                fill="#066ac9"
                d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919L5.25 4h13.5h-13.5Z"
              />
            </svg>
            Email:
          </span>

          <span className="mr-1">example@gmail.com</span>
        </li>
        <li className="text-zinc-500 text-[0.94rem] leading-5 py-1.5">
          <span className="text-zinc-800 mb-2 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-2">
              <path
                fill="#066ac9"
                d="M4 12h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 1 0-16 0Z"
              />
            </svg>
            Phone number:
          </span>

          <span className="mr-1">+896-789-546</span>
        </li>
        <li className="rounded-bl-md rounded-br-md text-zinc-500 text-[0.94rem] leading-5 py-1.5">
          <span className="text-zinc-800 mb-2 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="inline-block mr-2">
              <path
                fill="#066ac9"
                d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
              />
            </svg>
            Website:
          </span>

          <span className="mr-1">https://eduport.webestica.com/</span>
        </li>
      </ul>

      {/*  */}
      <section>
        
      </section>
    </section>
  );
};

export default InstructorIntro;
