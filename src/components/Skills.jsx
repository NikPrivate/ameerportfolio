import React from "react";

const Skills = () => {
  return (
    <section className="bg-gray-200">
      <div className="mt-10">
        <h1 className="text-center font-sans font-bold text-4xl">My Skills</h1>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 xl:px-[150px] px-10 mt-10 gap-10">
        <div className="col-span-1">
          <h1 className="text-xl font-sans font-semibold">Coding Skills</h1>
          <div className="border border-2 p-2 mt-5 rounded">
            <div>
              <p>HTML</p>
            </div>
            <div>
              <p>CSS</p>
            </div>
            <div>
              <p>Javascript</p>
            </div>
            <div>
              <p>Typescript</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-xl font-sans font-semibold">
            Professional Skills
          </h1>
          <div className="border border-2 p-2 mt-5 rounded">
            <div>
              <p>UI/UX Design</p>
            </div>
            <div>
              <p>Web Development</p>
            </div>
            <div>
              <p>Mobile Development</p>
            </div>
            <div>
              <p>Software Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
