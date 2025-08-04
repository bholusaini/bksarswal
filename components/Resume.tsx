"use client";

import React from "react";
import { Card } from "antd";


interface ResumeItemInterface {
  title: string;
  time: string;
  institute: string;
}



const education: ResumeItemInterface[] = [
  { time: "2020 - 2024", title: "Bachelor of Technology in Computer science & Engineering", institute: "Rajasthan Techanical University" },
  { time: "2019 - 2020", title: "Higher Secondary ", institute: "RBSE" },
  { time: "2017 - 2018", title: "Senior Secondary", institute: "RBSE" },
  { time: "Feb 2021 - Oct 2021", title: "MERN Stack Web Developmont", institute: "Wap Institute" },
];

const ResumeCard = ({ item }: { item: ResumeItemInterface }) => (
  <Card
  
    className="bg-[#140c1c]! hover:bg-gradient-to-br! from-blue-800 via-blue-600  border-0! rounded-2xl! transition-all text-white! shadow-lg"
  ><div className="flex justify-between items-center ">

    <div>
      <h3 className="text-[23px] font-bold">{item.title}</h3>
    <p className="text-[16px] text-gray-300">{item.institute}</p>
    </div>
      <p className="text-[20px] font-bold  bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent ">{item.time}</p>
  </div>
  </Card>
);

const Resume = () => {
  return (
    <div  id="resume" className="py-16 px-4 bg-gradient-to-br from-[#0b0510] via-[#1e162c] to-[#2e2a50]">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Education Section */}
        <div className="w-full">
          <div className=" w-full flex justify-center items-center gap-2 mb-4">           
            <h2 className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent text-4xl lg:text-[45px] font-extrabold">My Education</h2>
          </div>
          <div className="flex flex-col gap-4">
            {education.map((item, index) => (
              <ResumeCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Experience Section
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <LaptopOutlined className="text-blue-800!  text-4xl lg:text-[45px]" />
            <h2 className="text-blue-800 text-4xl lg:text-[45px] font-extrabold"> My Experience</h2>
          </div>
          <div className="flex flex-col gap-4">
            {experience.map((item, index) => (
              <ResumeCard key={index} item={item} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Resume;
