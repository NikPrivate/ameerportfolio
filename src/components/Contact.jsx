import React from "react";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-10 px-10 xl:px-0 bg-[#081b29]">
      <div className="pt-10">
        <h1 className="text-4xl text-white font-bold font-sans text-center">
          Contact <span className="text-blue-500">Me!</span>
        </h1>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mt-10 xl:px-[365px]">
        <div className="col-span-1">
          <div className="flex xl:justify-end justify-center">
            <input
              className="border-2 w-full border-blue-500 rounded bg-[#081b29] text-white h-10 pl-2"
              placeholder="Full Name"
            />
          </div>
          <div className="flex xl:justify-end justify-center mt-4">
            <input
              className="border-2 w-full border-blue-500 rounded bg-[#081b29] text-white h-10 pl-2"
              placeholder="Mobile Number"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex xl:justify-start justify-center">
            <input
              className="border-2 w-full border-blue-500 rounded bg-[#081b29] text-white h-10 pl-2"
              placeholder="Email Address"
            />
          </div>
          <div className="flex xl:justify-start justify-center mt-4">
            <input
              className="border-2 w-full border-blue-500 rounded bg-[#081b29] text-white h-10 pl-2"
              placeholder="Email Subject"
            />
          </div>
        </div>
      </div>
      <div className="xl:px-[365px] mt-4">
        <Textarea
          className="h-64 bg-[#081b29] text-white border-blue-500"
          placeholder="Message"
        />
      </div>
      <div className="flex justify-center mt-4">
        <button className="border-2 border-blue-500 bg-[#081b29] text-blue-500 py-2 px-6 rounded font-sans font-semibold cursor-pointer hover:bg-blue-500 hover:text-black">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Contact;
