import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center xl:px-[150px] px-10">
      <div className="grid xl:grid-cols-2 grid-cols-1">
        <div className="xl:col-span-2 col-span-1">
          <p className="text-white lg:text-6xl md:text-5xl text-4xl font-sans font-semibold">
            Hi. I'm Ameer Danial
          </p>
          <p className="text-blue-500 lg:text-4xl md:text-3xl text-2xl font-sans mt-4 font-semibold">
            Network Engineer
          </p>
        </div>
        <div className="xl:pr-10 pr-0 col-span-1 mt-10">
          <p className="text-white font-sans text-justify xl:text-base text-sm">
            I design, secure, and optimize network infrastructures for seamless
            connectivity and performance. Skilled in configuring routers,
            switches, firewalls, and cloud networking to build reliable and
            scalable systems.
          </p>
        </div>
        <div className="xl:col-span-2 col-span-1 mt-10 space-x-5">
          <button className="text-blue-500 border px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-black font-sans font-semibold cursor-pointer">
            Hire Me
          </button>
          <button className="text-blue-500 border px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-black font-sans font-semibold cursor-pointer">
            Let's Talk
          </button>
        </div>
        <div className="flex items-center xl:col-span-2 col-span-1 mt-[100px] space-x-4">
          <div className="border border-blue-500 rounded-full p-2 hover:bg-blue-500 cursor-pointer hover:text-white text-blue-500">
            <FaFacebookF className="text-2xl" />
          </div>
          <div className="border border-blue-500 rounded-full p-2 hover:bg-blue-500 cursor-pointer hover:text-white text-blue-500">
            <FaInstagram className="text-2xl" />
          </div>
          <div className="border border-blue-500 rounded-full p-2 hover:bg-blue-500 cursor-pointer hover:text-white text-blue-500">
            <FaLinkedinIn className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
