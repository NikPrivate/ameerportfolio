import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-white text-3xl font-sans font-semibold">
            Ameer.
          </h1>
        </div>
        <div className="flex justify-between gap-10">
          <a
            href="home"
            className="text-white text-xl font-sans hover:text-gray-500 font-semibold cursor-pointer"
          >
            Home
          </a>

          <a
            href="about"
            className="text-white text-xl font-sans hover:text-gray-500 font-semibold cursor-pointer"
          >
            About
          </a>
          <a
            href="skills"
            className="text-white text-xl font-sans hover:text-gray-500 font-semibold cursor-pointer"
          >
            Skills
          </a>
          <a
            href="contact"
            className="text-white text-xl font-sans hover:text-gray-500 font-semibold cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
