import React from "react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  return (
    <section className="bg-gray-200 py-10 mt-10">
      <div>
        <h1 className="text-center font-sans font-bold text-4xl">
          My <span className="text-blue-500">Skills</span>
        </h1>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 xl:px-[150px] px-10 mt-10 gap-10">
        <div className="col-span-1">
          <h1 className="text-xl font-sans font-semibold">Coding Skills</h1>
          <div className="border border-2 border-blue-500 p-4 mt-5 rounded">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg">HTML</p>
                <p className="font-sans font-semibold">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg">CSS</p>
                <p className="font-sans font-semibold">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg">Javascript</p>
                <p className="font-sans font-semibold">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg">Typescript</p>
                <p className="font-sans font-semibold">33%</p>
              </div>
              <Progress value={33} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-xl font-sans font-semibold">
            Professional Skills
          </h1>
          <div className="border border-2 border-blue-500 p-4 mt-5 rounded">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg">UI/UX Design</p>
                <p className="font-sans font-semibold">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg">
                  Web Development
                </p>
                <p className="font-sans font-semibold">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg">
                  Mobile Development
                </p>
                <p className="font-sans font-semibold">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg">
                  Software Development
                </p>
                <p className="font-sans font-semibold">33%</p>
              </div>
              <Progress value={33} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
