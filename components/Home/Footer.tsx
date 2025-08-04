"use client";

import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-[#140c1c] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
             <div className='flex gap-2 justify-center items-center'>
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
                  <Link
                    href="/"
                    className="text-white text-xl font-bold tracking-widest font-mono"
                  >
                    BK
                  </Link>
                </div>
  
                {/* <label className="text-2xl font-bold bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                  SARSWAL
                </label> */}
              </div>

          {/* Menu */}
          <ul className="flex flex-wrap justify-center gap-5 text-sm md:text-base font-medium">
            <li>
              <Link href="/#home" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#works" className="hover:text-blue-500 transition">
                Works
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-blue-500 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#resume" className="hover:text-blue-500 transition">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-lg font-semibold text-gray-400">
            © 2025 All Rights Reserved by{" "}
            <Link
              href="https://bksarswal.vercel.app"
              className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
             bksarswal
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
