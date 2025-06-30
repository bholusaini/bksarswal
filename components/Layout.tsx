import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
interface ChildrenINterface {
    children:ReactNode
}
const Layout:FC<ChildrenINterface> = ({children}) => {
   return (
    <div>
         <div className="bg-[#0f0715]">
     <header className=" top-0 left-0 w-full z-100 bg-[#0f0715] sticky ">
      <div className="container mx-auto px-4">
        <div className="flex  items-center justify-between py-2">
          <div className="flex items-center py-2 px-1">
            <a href="https://gerold.themejunction.net/" className='text-4xl font-bold text-white'>
             Bksarswal
            </a>
          </div>         

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex  text-lg font-semibold text-white gap-8 ">
              <li >
                <Link href="/" className="hover:border-b-blue-500 ">Home</Link>
              </li>
              <li>
                <Link href="/works" className="hover:border-b-blue-500">Works</Link>
              </li>
              <li>
                <Link href="#resume" className="hover:border-b-blue-500">Resume</Link>
              </li>
              <li>
                <Link href="#skills" className="hover:border-b-blue-500">Skills</Link>
              </li>
             
             
            </ul>
          </nav>

         
          <div className="ml-4 ">
            <a
              href="#"
              className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full bg-[#3a1e70] hover:bg-indigo-700 transition"
            >
             Contact
            </a>
          </div>

          <div className="lg:hidden">
            <button className="flex flex-col justify-center items-center w-8 h-8 space-y-1">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </button>
          </div>
        </div>
      </div>
    </header>

   

    {children}
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
    </div>
  )
}

export default Layout