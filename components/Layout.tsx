"use client"
import Link from 'next/link'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import 'animate.css'

interface ChildrenInterface {
  children: ReactNode
}

const Layout: FC<ChildrenInterface> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
<div className="min-h-screen w-full bg-gradient-to-r from-[#0b0510] via-[#171225] to-[#2a2a4b]">
     
      <header
        className={`top-0 left-0 w-full z-[100] sticky  transition-all duration-300 
        ${
          isScrolled
            ? 'bg-black shadow-lg animate__animated animate__fadeInDown'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center px-1">
        <a href="/" className="text-white text-3xl md:text-4xl font-extrabold tracking-widest font-mono">
         <span className="text-white p-2 text-4xl font bold rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa ">BS</span>
        </a>




            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
              <ul className="flex text-lg font-semibold text-white gap-8">
                <li>
                  <Link href="/" className="hover:border-b-2 hover:border-blue-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="hover:border-b-2 hover:border-blue-500">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="#resume" className="hover:border-b-2 hover:border-blue-500">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:border-b-2 hover:border-blue-500">
                    Skills
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact Button */}
            <div className="ml-4">
              <a
                href="#"
                className="bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <button className="flex flex-col justify-center items-center w-8 h-8 space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* WhatsApp Icon */}
      <div>
        <Link
          href="https://wa.me/9119142594?text=Hi !"
          className="w-20 h-20 fixed bottom-0 right-0 m-8 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
        >
          <img
            className="w-full h-full rounded-full"
            src="/download (1).jpg"
            alt="WhatsApp"
          />
        </Link>
      </div>
    </div>
  )
}

export default Layout
