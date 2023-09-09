import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";
import FormDetails from "./FormDetails";

const ContactForm = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div>
          <Image width={300} height={300} src="/contact.svg" alt="" className="mx-auto w-full md:w-[75%] lg:w-[60%] h-auto" />
          <div>
            <div className="items-center text-zinc-500 flex text-[0.94rem] leading-5 justify-center text-center flex-col sm:flex-row">
              <h5 className="text-zinc-800 text-[1.21rem] lg:text-[1.31rem] leading-7 font-bold">Follow us on:</h5>

              <SocialLinks />
            </div>
          </div>
        </div>
        <div>
          <FormDetails />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
