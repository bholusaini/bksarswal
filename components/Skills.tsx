// components/SkillsSection.tsx
"use client";

import React from "react";
import { Typography, Progress } from "antd";


const { Title, Paragraph } = Typography;

interface SkillItem {
  name: string;
  image: string;
  percent: number;
}

const skills = [
  // Frontend
  { name: "HTML", image: "/images/html.png", percent: 98 },
  { name: "CSS", image: "/images/css.png", percent: 96 },
  { name: "JavaScript", image: "/images/js.png", percent: 93 },
  { name: "React.js", image: "/images/react.png", percent: 90 },
  { name: "Next.js", image: "/images/nextjs.jpeg", percent: 88 },
  { name: "Tailwind CSS", image: "/images/tailwind.png", percent: 95 },
  { name: "Ant Design", image: "/images/antd.jpeg", percent: 90 },
  { name: "ShadCN UI", image: "/images/shadcn.png", percent: 85 },

  // Backend
  { name: "Node.js", image: "/images/node.png", percent: 85 },
  { name: "Express.js", image: "/images/express.jpeg", percent: 88 },
  { name: "MongoDB", image: "/images/mongodb.jpeg", percent: 90 },
  { name: "Microservices", image: "/images/microservices.png", percent: 80 },
  { name: "REST APIs", image: "/images/api.png", percent: 85 },

  // DevOps
  { name: "Git & GitHub", image: "/images/github.jpeg", percent: 92 },
  { name: "Docker", image: "/images/docker.png", percent: 75 },
  { name: "AWS", image: "/images/aws.png", percent: 78 },
  { name: "CI/CD (GitHub Actions)", image: "/images/cicd.png", percent: 82 },

  // Cloud & Tools
  { name: "Firebase", image: "/images/firebase.png", percent: 85 },
  { name: "Vercel", image: "/images/vercel.svg", percent: 90 },
  { name: "Render", image: "/images/render.png", percent: 88 },

  // Enterprise
  { name: "Monorepo (Nx/Turbo)", image: "/images/monorepo.png", percent: 70 },
  { name: "Lazy Loading", image: "/images/lazy.png", percent: 85 },
  { name: "Auth (JWT/OAuth)", image: "/images/auth.png", percent: 88 },
];



const Skills = () => {
  return (
    <div className="py-16 px-4 text-center bg-gradient-to-br from-[#0b0510] via-[#1b132a] to-[#2e2a50]">
      <div className="max-w-screen-xl mx-auto">
        <Title
          level={2}
          className="!text-blue-400 !text-3xl md:!text-6xl font-extrabold! mb-4"
        >
          My Skills
        </Title>

        <Paragraph className="max-w-2xl mx-auto text-white! text-xl! md:text-base mb-12">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </Paragraph>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2">
          {skills.map((skill,index) => (
            
            <div
              key={index}
              className="flex flex-col text-white items-center justify-center "
            >
              <div className="flex flex-col items-center justify-center px-6 py-4 bg-white/5 hover:bg-[#673bbfd8] rounded-xl border border-white/10 hover:shadow-xl transition-all hover:scale-105">

              <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 mb-3 rounded-full object-cover"
              />
               <p className="mt-3 font-bold text-2xl text-white">{skill.percent}%</p>
              </div>
              
             
             <p className="mt-3 font-bold text-2xl  text-blue-600">{skill.name}</p>
            </div>
            
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
