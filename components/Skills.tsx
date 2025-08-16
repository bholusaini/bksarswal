// components/SkillsSection.tsx
"use client";

import React from "react";
import { Typography,} from "antd";


const { Title, Paragraph } = Typography;

// interface SkillItem {
//   name: string;
//   image: string;
//   percent: number;
// }

const skills = [
  // Frontend
 
  { name: "React.js", image: "/images/react.png" },
  { name: "Next.js", image: "/images/nextjs.jpeg" },
  { name: "Tailwind CSS", image: "/images/tailwind.png" },
  { name: "Ant Design", image: "/images/antd.jpeg" },
  { name: "ShadCN", image: "/images/shadcn.png" },

  // Backend
  { name: "Node.js", image: "/images/node.png" },
  { name: "Express.js", image: "/images/express.jpeg" },
  { name: "MongoDB", image: "/images/mongodb.jpeg" },
  { name: "Micro services", image: "/images/microservicess.png" },
  { name: "REST APIs", image: "/images/restapi.jpg" },

  // DevOps
  { name: "Git/GitHub", image: "/images/github.jpeg" },
  { name: "Docker", image: "/images/docker.png" },
  { name: "AWS", image: "/images/aws.png" },
  { name: "CI/CD", image: "/images/cicd.png" },

  // Cloud & Tools
  // { name: "Firebase", image: "/images/firebase.png", percent: 85 },
  { name: "Vercel", image: "/images/vercel.svg", percent: 90 },
  // { name: "Render", image: "/images/render.png", percent: 88 },

  // Enterprise
  // { name: "Monorepo (Nx/Turbo)", image: "/images/monorepo.png", percent: 70 },
  // { name: "Lazy Loading", image: "/images/lazy.png", percent: 85 },
  // { name: "Auth (JWT/OAuth)", image: "/images/auth.png", percent: 88 },
];


const gradients = [
  "bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300",
  "bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400",
  "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400",
  "bg-gradient-to-r from-lime-400 via-green-400 to-emerald-300",
  "bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400",
  "bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-300",
  "bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-300",
  "bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-300",
  "bg-gradient-to-r from-amber-400 via-yellow-400 to-lime-300",
  "bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-300"
]

const Skills = () => {
  
  return (
    <div id="skills" className="py-16 px-4 text-center bg-gradient-to-br from-[#0b0510] via-[#1b132a] to-[#2e2a50]">
      <div className="max-w-screen-xl mx-auto">
        <Title
          level={2}
          className="!text-blue-400 !text-3xl md:!text-6xl font-extrabold! mb-4"
        >
          <div className="bg-gradient-to-r font-serif from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">

          My Skills
          </div>
        </Title>

        <Paragraph className="max-w-2xl mx-auto text-white! text-xl! md:text-base mb-12">
        Explore my tech stack as a Full-Stack Developer — the tools and technologies I use to build modern, end-to-end web applications.
        </Paragraph>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {
          skills.map((skill,index)=>{
               const gradientIndex = index % gradients.length
            const grad = gradients[gradientIndex]
            return (            
            
              <div 
               key={index}
              className="flex flex-col items-center justify-center px-6 py-4 bg-white/5 hover:bg-gradient-to-r from-sky-400 via-purple-300 to-white rounded-xl border border-white/10 hover:shadow-xl transition-all hover:scale-105">

              <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 mb-3 rounded-full object-cover"
              />
               {/* <p className="mt-3 font-bold text-2xl text-white">{skill.name}</p> */}
               <p className={`mt-3 font-bold text-2xl   text-transparent bg-clip-text ${grad}`}>{skill.name}</p>
              </div>
              
             
           
            
          
          )
        })
        }
        </div>
      </div>
    </div>
  );
};

export default Skills;
