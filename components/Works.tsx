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
    title: "Amoeba Productions",
    description: "Amoeba Productions & Studio  is a Patna-based event management and media production company, offering services such as event planning (weddings, birthdays, engagements, concerts), corporate events, digital marketing, advertising, and brand promotions across Patna, Bihar, Delhi, and Ranchi amoebaproductions.inThey also coordinate logistics for parties and commercial shoots—handling everything from production management to meals and accommodations—with a focus on transparent pricing and competitive local rates",
    image:"/project/amoeba.png",
    category: "apps",
    link: "https://www.amoebaproductions.in"
  },
  {
    title: "Ferns N Petals (FNP)",
    description: "FNP is India’s leading floral and gifting brand, offering products like fresh flowers, cakes, personalized gifts, plants, chocolates, and corporate hampers. It serves customers through both online and offline retail, featuring services like same-day and midnight delivery, and has diversified into areas such as weddings & events, franchising, rental décor, and floral design schools.",
     image:"/project/fnb.png",      
    category: "branding",
    link: "https://www.fnp.com",
  },
  {
    title: "PayRentz",
    description: "PayRentz is an Indian online rental platform—primarily serving Chennai and Coimbatore—that offers home appliances, furniture, fitness gear, and laptops on a flexible monthly rental basis. They promise a tech-powered, hassle-free experience with quick delivery (usually within 24 hours), “Rent Now, Pay Later” billing, and well-maintained items at each stage. ",
    image:"/project/payrentz.png",
    category: "ux-ui",
    link: "https://www.payrentz.com",
  },
  {
    title: "SOS Party",
    description: "SOS Party is a leading event management platform in India specializing in corporate and team-building experiences—offering virtual, in-person, hybrid, offsite, and MICE events. They provide over 100 unique, professionally curated activities (ranging from drum circles and VR treasure hunts to celebratory festivities) along with celebrity bookings, venue logistics, and seamless event execution.",
   image:"/project/sosParty.png",
    category: "branding",
    link: "https://sosparty.io",
  },
  {
    title: "Furlenco",
    description: "Furlenco is an Indian online platform that offers furniture and home appliances on a flexible rental or subscription basis. Customers can rent, subscribe, or buy products with the freedom to upgrade or swap items as needed, making it a convenient solution for modern, mobile lifestyles.",
   image:"/project/furlenco.png",
    category: "branding",
    link: "https://www.furlenco.com",
  },
  {
    title: "Livspace",
    description: "Livspace is a leading tech-enabled home interior and renovation platform headquartered in Bengaluru, serving India, Singapore, and the Middle East. It redefines home design through an end-to-end solution—blending personalized 3D design consultations, modular interiors, professional installation, and management of the entire renovation process—with transparent pricing, quick turnaround, and a marketplace-powered model. They generate revenue through design service fees, commissions on product sales, and project execution charges.",
   image:"/project/livspace.png",
    category: "branding",
    link: "https://www.livspace.com",
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
      <Title level={2} className=" !font-serif bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent! !text-3xl md:!text-6xl font-extrabold! mb-4">
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

            
            
           <div className="absolute bottom-0 left-0    to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-5">
              
              <Card className="bg-gradient-to-br! from-blue-800 via-blue-600  border-0!  " >
              <div className="flex justify-between items-center ">
                <div className="text-start">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
                <Link
                  href={item.link}   
                  target="_blanck"             
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
