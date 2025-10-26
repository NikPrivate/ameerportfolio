import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const Copyright = ({ refs }) => {
  const homeRef = refs;

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
      <div className="bg-[#122e43] xl:px-[150px] px-10 py-5 flex justify-between items-center">
        <p className="font-sans font-semibold xl:text-lg text-sm text-white">
          Copyright @ 2025 by Ameer Danial | All Rights Reserved
        </p>
        <button
          className=" bg-blue-500 xl:p-2 p-1 rounded cursor-pointer"
          onClick={() => scrollToSection(homeRef)}
        >
          <FaArrowUp className="xl:text-lg text-sm" />
        </button>
      </div>
    </section>
  );
};

export default Copyright;
