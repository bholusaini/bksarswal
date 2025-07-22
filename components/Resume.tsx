"use client";

import React from "react";
import { Card } from "antd";
import { BookOutlined, LaptopOutlined } from "@ant-design/icons";

interface ResumeItemInterface {
  title: string;
  time: string;
  institute: string;
}

const experience: ResumeItemInterface[] = [
  { time: "2022 - Present", title: "Lead Developer", institute: "Blockdots, London" },
  { time: "2021 - 2022", title: "Full Stack Web Developer", institute: "Parsons, The New School" },
  { time: "2020 - 2021", title: "UI Designer", institute: "House of Life, Leeds" },
  { time: "2018 - 2020", title: "Junior Graphics Designer", institute: "Theme Junction, Bursa" },
];

const education: ResumeItemInterface[] = [
  { time: "2020 - 2023", title: "Programming Course", institute: "Harverd University" },
  { time: "2016 - 2020", title: "Graphic Design Course", institute: "University of Denmark" },
  { time: "2012 - 2015", title: "Web Design Course", institute: "University of California" },
  { time: "2010 - 2011", title: "Design & Technology", institute: "Parsons, The New School" },
];

const ResumeCard = ({ item }: { item: ResumeItemInterface }) => (
  <Card
  
    className="bg-[#140c1c]! hover:bg-gradient-to-br! from-blue-800 via-blue-600  border-0! rounded-2xl! transition-all text-white! shadow-lg"
  >
    <p className="text-[20px] font-bold  text-blue-500">{item.time}</p>
    <h3 className="text-[23px] font-bold">{item.title}</h3>
    <p className="text-[16px] text-gray-300">{item.institute}</p>
  </Card>
);

const Resume = () => {
  return (
    <div  id="resume" className="py-16 px-4 bg-gradient-to-br from-[#0b0510] via-[#1e162c] to-[#2e2a50]">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Education Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <BookOutlined className="text-blue-800! text-4xl lg:text-[45px] " />
            <h2 className="text-blue-800 text-4xl lg:text-[45px] font-extrabold">My Education</h2>
          </div>
          <div className="flex flex-col gap-4">
            {education.map((item, index) => (
              <ResumeCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Experience Section */}
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
        </div>
      </div>
    </div>
  );
};

export default Resume;
