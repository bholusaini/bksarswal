// components/PortfolioSection.tsx
"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const { Title } = Typography;

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const items: PortfolioItem[] = [
  {
    title: "Sebastian",
    description: "Project was about precision and information....",
    image:
      "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-2.jpg",
    category: "apps",
    link: "https://gerold.themejunction.net/portfolios/sebastian/",
  },
  {
    title: "Deloitte",
    description: "Project was about precision and information....",
    image:
      "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-3.jpg",
    category: "branding",
    link: "https://gerold.themejunction.net/portfolios/deloitte/",
  },
  {
    title: "New Age",
    description: "Project was about precision and information....",
    image:
      "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-4.jpg",
    category: "ux-ui",
    link: "https://gerold.themejunction.net/portfolios/new-age/",
  },
  {
    title: "Mochnix",
    description: "Project was about precision and information....",
    image:
      "https://gerold.themejunction.net/wp-content/uploads/2024/05/portfolio-1.jpg",
    category: "branding",
    link: "https://gerold.themejunction.net/portfolios/mochnix/",
  },
];

const categories = ["all", "apps", "branding", "ux-ui"];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
   <div id="works" className="px-4 py-16 bg-gradient-to-r from-[#0b0510] via-[#171225] to-[#2a2a4b] text-center">
      <Title level={2} className="text-blue-600! !text-3xl md:!text-6xl font-extrabold! mb-4">
        My Recent Works
      </Title>

      {/* Filters */}
      <div className="flex justify-center gap-1 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
              activeFilter === cat
                ? "bg-gradient-to-br! from-blue-800 via-blue-600  text-white"
                : "text-white hover:bg-gradient-to-br from-blue-800 via-blue-600 "
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {filteredItems.map((item) => (
    <div
      key={item.title}
      className="relative rounded-xl overflow-hidden group shadow-lg"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 sm:h-72 lg:h-100 object-cover "
      />

            
            
           <div className="absolute bottom-0 left-0 w-full  to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
              
              <Card className="bg-gradient-to-br! from-blue-800 via-blue-600  border-0!  " >
              <div className="flex justify-between items-center ">
                <div className="text-start">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
                <Link
                  href={item.link}                
                  className="  text-white  text-3xl font-bold "
                >
                   <ArrowRightOutlined/>
                </Link>
              </div>
              </Card>
              
           </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
