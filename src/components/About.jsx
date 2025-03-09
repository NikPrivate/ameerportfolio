import React, { forwardRef } from "react";
import { CgProfile } from "react-icons/cg";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-gray-200 border-white shadow-lg">
      <div className="mx-auto w-fit py-10">
        <div>
          <h1 className="text-center text-4xl font-sans font-bold">
            About <span className="text-gray-800"> Me</span>
          </h1>
        </div>
        <div className="flex justify-center mt-5">
          <CgProfile className="text-8xl" />
        </div>
        <div className="mt-5">
          <p className="text-center text-3xl font-sans font-bold">
            Network Engineer
          </p>
        </div>
        <div className="mt-10">
          <p className="xl:px-[300px] px-10 text-center font-sans xl:text-base text-sm">
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
