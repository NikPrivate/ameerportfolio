import React from "react";
import { CgProfile } from "react-icons/cg";

const About = () => {
  return (
    <div className="bg-gray-200 border-white shadow-lg">
      <div className="mx-auto w-fit">
        <div className="border">
          <h1 className="text-center text-4xl font-sans font-bold">
            About <span className="text-gray-800"> Me</span>
          </h1>
        </div>
        <div className="flex justify-center mt-5">
          <CgProfile className="text-8xl" />
        </div>
        <div className="mt-10">
          <p className="px-[300px] text-center font-sans">
            A Network Engineer with over 5 years of experience designing,
            securing, and optimizing network infrastructures. I specialize in
            building scalable, reliable systems that ensure seamless
            connectivity and robust security for businesses. I have hands-on
            experience with a wide range of technologies, including routers,
            switches, firewalls, and cloud networking solutions. Over the years,
            I've honed my skills in troubleshooting, performance optimization,
            and securing networks against evolving threats. Driven by a passion
            for technology, I am always learning and adapting to stay ahead of
            industry trends. Let’s connect and create reliable network solutions
            for the future!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
