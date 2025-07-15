"use client";

import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-[#140c1c] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
            <div className="w-16 h-16  flex justify-center items-center rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa]">
              <a
                href="/"
                className="text-white text-xl font-bold tracking-widest font-mono "
              >
                 BK
            
              </a>
            </div>

          {/* Menu */}
          <ul className="flex flex-wrap justify-center gap-5 text-sm md:text-base font-medium">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/works" className="hover:text-blue-500 transition">
                Works
              </a>
            </li>
            <li>
              <a href="/skills" className="hover:text-blue-500 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="/resume" className="hover:text-blue-500 transition">
                Resume
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-lg font-semibold text-gray-400">
            © 2025 All Rights Reserved by{" "}
            <Link
              href="https://themejunction.net/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
             bkSarswal0799
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
