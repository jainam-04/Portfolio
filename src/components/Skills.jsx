import React from "react";

function Skills() {
  return (
    <div>
      <div className="bg-cyan-950 skills pb-5">
        <h1 className="text-5xl text-center font-bold text-white mt-0 mb-10 pt-10">
          Skills
        </h1>
        <div className="text-white text-lg pb-10">
          <ul className="flex gap-20 justify-center items-center my-5 py-3 list-disc">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
          <hr className="w-[50vw] ms-96" />
          <ul className="flex gap-20 justify-center items-center my-5 py-3 list-disc">
            <li>Java</li>
            <li>AWT</li>
            <li>Swing</li>
            <li>JDBC</li>
          </ul>
          <hr className="w-[40vw] ms-[30vw]" />
          <ul className="flex gap-20 justify-center items-center my-5 py-3 list-disc">
            <li>Git</li>
            <li>GitHub</li>
            <li>VSCode</li>
            <li>IntelliJ Idea</li>
            <li>MySQL Workbench</li>
          </ul>
          <hr className="w-[55vw] ms-[23vw]" />
          <ul className="flex gap-20 justify-center items-center my-5 py-3 list-disc">
            <li>SQL</li>
            <li>DBMS</li>
          </ul>
          <hr className="w-[20vw] ms-[40vw]" />
          <ul className="flex gap-20 justify-center items-center my-5 py-3 list-disc">
            <li>Team-Work</li>
            <li>Problem-Solving</li>
          </ul>
          <hr className="w-[30vw] ms-[35vw]" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
