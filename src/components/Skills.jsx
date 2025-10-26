import React from "react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  return (
    <section className="bg-[#122e43] py-[100px]">
      <div>
        <h1 className="text-center font-sans font-bold text-4xl text-white">
          My <span className="text-blue-500">Skills</span>
        </h1>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 xl:px-[150px] px-10 mt-10 gap-10">
        <div className="col-span-1">
          <h1 className="text-xl font-sans font-semibold text-white">
            Coding Skills
          </h1>
          <div className="border-2 border-blue-500 p-4 mt-5 rounded">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg text-white">
                  HTML
                </p>
                <p className="font-sans font-semibold text-white">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg text-white">
                  CSS
                </p>
                <p className="font-sans font-semibold text-white">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg text-white">
                  Javascript
                </p>
                <p className="font-sans font-semibold text-white">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg text-white">
                  Typescript
                </p>
                <p className="font-sans font-semibold text-white">33%</p>
              </div>
              <Progress value={33} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-xl font-sans font-semibold text-white">
            Professional Skills
          </h1>
          <div className="border-2 border-blue-500 p-4 mt-5 rounded">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg text-white">
                  UI/UX Design
                </p>
                <p className="font-sans font-semibold text-white">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg text-white">
                  Web Development
                </p>
                <p className="font-sans font-semibold text-white">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg text-white">
                  Mobile Development
                </p>
                <p className="font-sans font-semibold text-white">33%</p>
              </div>
              <Progress value={33} />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p className="font-sans font-semibold text-lg text-white">
                  Software Development
                </p>
                <p className="font-sans font-semibold text-white">33%</p>
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
