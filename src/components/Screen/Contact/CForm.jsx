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
      <div>
        <div className="w-full text-zinc-500 text-[0.94rem] leading-5 mt-10 md:mt-20">
          <iframe
            className="h-96 rounded-md overflow-clip !w-full grayscale hover:grayscale-0 duration-300 transition"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187892326!2d90.33728810822274!3d23.78097572821751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sin!4v1694607458809!5m2!1sen!2sin"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
