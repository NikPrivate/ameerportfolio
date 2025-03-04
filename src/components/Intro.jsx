import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Intro = () => {
  return (
    <div id="home" className="min-h-screen">
      <div className="mt-[100px] grid grid-cols-2">
        <div className="col-span-2">
          <p className="text-white text-7xl font-sans font-semibold">
            Hi. I'm Ameer Danial
          </p>
          <p className="text-gray-300 text-5xl font-sans mt-4 font-semibold">
            Network Engineer
          </p>
        </div>
        <div className="pr-[120px] col-span-1  mt-10">
          <p className="text-white font-sans text-justify text-lg">
            I design, secure, and optimize network infrastructures for seamless
            connectivity and performance. Skilled in configuring routers,
            switches, firewalls, and cloud networking to build reliable and
            scalable systems.
          </p>
        </div>
        <div className="col-span-2 mt-10 space-x-5">
          <button className="text-white border px-4 py-1 rounded-lg hover:bg-white hover:text-black font-sans font-semibold cursor-pointer">
            Hire Me
          </button>
          <button className="text-white border px-4 py-1 rounded-lg hover:bg-white hover:text-black font-sans font-semibold cursor-pointer">
            Let's Talk
          </button>
        </div>
        <div className="flex items-center col-span-2 mt-[100px] space-x-4">
          <div className="border border-white rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <FaFacebookF className="text-2xl text-gray-300 hover:text-black" />
          </div>
          <div className="border border-white rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <FaInstagram className="text-2xl text-gray-300 hover:text-black" />
          </div>
          <div className="border border-white rounded-full p-2 hover:bg-gray-300 cursor-pointer">
            <FaLinkedinIn className="text-2xl text-gray-300 hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
