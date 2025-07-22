'use client'
import Link from 'next/link'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import 'animate.css'
import { MenuOutlined } from '@ant-design/icons'

interface ChildrenInterface {
  children: ReactNode
}

const Layout: FC<ChildrenInterface> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
        const link = document.createElement('a');
        link.href="/bholusaini.pdf";
        link.download = "Resume_Bholusaini.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#0b0510] via-[#171225] to-[#2a2a4b]">
      {/* Header */}
      <header
        className={`top-0  left-0 w-full z-[100] sticky transition-all duration-300 ${
          isScrolled
            ? 'bg-black shadow-lg animate__animated animate__fadeInDown'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-8 ">
          <div className="flex items-center justify-between py-4">
            <div className='flex gap-2 justify-center items-center'>
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa]">
                  <Link
                    href="/"
                    className="text-white text-xl font-bold tracking-widest font-mono"
                  >
                    BK
                  </Link>
                </div>
{/*   
                <label className="text-2xl font-bold bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                  SARSWAL
                </label> */}
              </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:block">
              <ul className="flex text-lg font-semibold text-white gap-8">           
                <li><Link href="/#home" className="hover:border-b-2 hover:border-blue-500">Home</Link></li>
                <li><Link href="/#works" className="hover:border-b-2 hover:border-blue-500">Works</Link></li>
                <li><Link href="/#resume" className="hover:border-b-2 hover:border-blue-500">Resume</Link></li>
                <li><Link href="/#skills" className="hover:border-b-2 hover:border-blue-500">Skills</Link></li>
              </ul>
            </nav>

            {/* Contact Button */}
            <div className="ml-4 lg:block">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition"
              >
                Contact me!
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col justify-center items-center  w-16! h-16! space-y-1"
              >
              <MenuOutlined className=' text-4xl text-white! font-extrabold!' />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[100] animate__animated animate__fadeInRight">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-[#0b0510] shadow-lg p-6 flex flex-col gap-6 text-white text-xl font-semibold">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end text-3xl font-bold mb-6"
            >
              ✕
            </button>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/works" onClick={() => setIsMenuOpen(false)}>Works</Link>
            <Link href="/resume" onClick={() => setIsMenuOpen(false)}>Resume</Link>
            <Link href="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}> Contact</Link>
          
          </div>
        </div>
      )}

      {/* Page Content */}
      {children}

      {/* WhatsApp Floating Icon */}
      <div>
        <Link
          href="https://wa.me/9119142594?text=Hi !"
          className="w-16 h-16 fixed bottom-0 right-0 m-8 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl animate-bounce"
        >
          <img
            className="w-full h-full rounded-full"
            src="/watsapp.webp"
            alt="WhatsApp"
          />
        </Link>
      </div>
    </div>
  )
}

export default Layout
