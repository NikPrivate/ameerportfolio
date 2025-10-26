import React, { forwardRef } from "react";
import { CgProfile } from "react-icons/cg";

const About = forwardRef((props, ref) => {
  return (
    <section className="bg-[#122e43] border-white shadow-lg py-10">
      <div className="mx-auto w-fit py-10">
        <div>
          <h1 className="text-center text-4xl font-sans font-bold text-white">
            About <span className="text-blue-500"> Me</span>
          </h1>
        </div>
        <div className="flex justify-center mt-5">
          <CgProfile className="text-[250px]" />
        </div>
        <div className="mt-5">
          <p className="text-center text-3xl font-sans font-bold text-white">
            Network Engineer
          </p>
        </div>
        <div className="mt-10">
          <p className="xl:px-[300px] px-10 text-center font-sans xl:text-base text-sm text-white">
            A Network Engineer with over 5 years of experience designing,
            securing, and optimizing network infrastructures. I specialize in
            building scalable, reliable systems that ensure seamless
            connectivity and robust security for businesses. I have hands-on
            experience with a wide range of technologies, including routers,
            switches, firewalls, and cloud networking solutions.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
