
import React from 'react'
import Works from '../Works'
import Resume from '../Resume'
import Skills from '../Skills'
import Contact from '../Contact'
import Footer from './Footer'
import Link from 'next/link'

const Home = () => {
  return (
    <div id='home' className="w-full bg-gradient-to-r from-[#0b0510] via-[#171225] to-[#2a2a4b]">
      <section className="relative flex items-center min-h-screen">
        <div className="container mx-auto px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">            
          
            <div className="w-full md:w-6/12  md:text-left order-1 md:order-none">
              {/* Heading fo Mobile */}
              <div className="md:hidden flex  flex-col justify-start gap-4 mb-6">
                <span className="text-2xl sm:text-2xl text-white font-bold block">
                  I am Bholu Saini
                </span>
               <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#9564f8] to-[#8e5bf8] bg-clip-text text-transparent">
                  Full Stack <br/> Web Developer
                </h1>
              </div>

              {/* img for Mobile */}
              <div className=" md:hidden flex justify-center mb-6">
                <div className="transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out">
                  <div className="flex  w-full h-full  justify-center items-center border-4 border-indigo-400 hover:border-blue-600 rounded-xl">
                    <img
                      src="/mypic.png"
                      alt="bksarswal"
                      className="rounded-lg w-fit h-[350px] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Description + download btn show All Same  */}
              <div className="space-y-6">
                {/* Heading for Desktop */}
                <div className="hidden md:block">
                  <span className="text-2xl sm:text-3xl text-white font-bold block pb-2">
                    I am Bholu Saini
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#8e5bf8] font-extrabold leading-tight">
                    Full Stack<br />Web Developer
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-gray-300 font-medium max-w-2xl mx-auto md:mx-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos assumenda sunt qui, incidunt odio asperiores inventore quae provident!
                </p>

                <div className="pt-2">
                  <Link
                    href="/bholusaini.pdf"
                    download
                    className="inline-flex items-center gap-2 border border-blue-400 text-blue-400 hover:text-white text-base sm:text-lg font-bold hover:bg-blue-500 px-6 py-3 rounded-full transition-all duration-300"
                  >
                    Download CV
                  </Link>
                </div>
              </div>
            </div>

            {/* 🖼️ Desktop Image */}
            <div className="hidden md:block md:w-6/12 order-2">
              <div className="flex justify-center md:mt-0">
                <div className="transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out">
                  <div className=" w-full h-full flex justify-center items-center border-4 border-indigo-400 hover:border-blue-600 rounded-xl ">
                    <img
                      src="/mypic.png"
                      alt="bksarswal"
                      className="rounded-lg  h-[390px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Works/>
      <Resume/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
