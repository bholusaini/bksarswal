import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className="w-full">
      <section className="relative flex items-center min-h-screen bg-black">
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* 📝 Mobile Heading + Image + Desc + Button | Full Text on Desktop */}
            <div className="w-full md:w-1/2  md:text-left order-1 md:order-none">
              {/* Heading Only on Mobile */}
              <div className="md:hidden flex  flex-col justify-start gap-4 mb-6">
                <span className="text-2xl sm:text-2xl text-white font-bold block">
                  I am Bholu Saini
                </span>
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#9564f8] to-[#8e5bf8] bg-clip-text text-transparent">
                  Full Stack <br/> Web Developer
                </h1>
              </div>

              {/* 👨‍💻 Image - Only on Mobile */}
              <div className=" md:hidden flex justify-center mb-6">
                <div className="transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out">
                  <div className="flex justify-center items-center border-4 border-indigo-400 hover:border-blue-600 rounded-xl w-[280px] md:w-[300px] h-[350px] md:h-[30px]">
                    <img
                      src="/mypic.png"
                      alt="bksarswal"
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Description + Button (always shown) */}
              <div className="space-y-6">
                {/* Heading (Desktop only) */}
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
                  <a
                    href="/bholu-resume.pdf"
                    download
                    className="inline-flex items-center gap-2 border border-blue-400 text-blue-400 hover:text-white text-base sm:text-lg font-bold hover:bg-blue-500 px-6 py-3 rounded-full transition-all duration-300"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            {/* 🖼️ Desktop Image */}
            <div className="hidden md:block md:w-1/2 order-2">
              <div className="flex justify-center mt-8 md:mt-0">
                <div className="transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out">
                  <div className="flex justify-center items-center border-4 border-indigo-400 hover:border-blue-600 rounded-xl w-[300px] h-[400px]">
                    <img
                      src="/mypic.png"
                      alt="bksarswal"
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
