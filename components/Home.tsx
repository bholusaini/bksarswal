import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className="w-full ">      
      <section className="relative flex items-center min-h-screen">  
        <div className="container mx-auto p-6 ">
          <div className="flex flex-col md:flex-row items-center">        
            <div className="md:w-1/2">
              <div className='space-y-6'>
  <span className='text-2xl sm:text-3xl text-white font-bold block pb-4'>
    I am Bholu Saini
  </span>

  <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#8e5bf8] font-extrabold leading-tight'>
    Full Stack<br />Web<br />Developer
  </h1>

  <p className='text-base sm:text-lg text-gray-300 font-medium max-w-2xl'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos assumenda sunt qui, incidunt odio asperiores inventore quae provident!
  </p>


<div className="pt-6 text-start">
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
                    
   <div className="hidden md:block md:w-1/2">
  {/* Outer wrapper handles rotation + hover reset */}
  <div className="transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out">
    <div className="flex justify-center items-center border-3 border-indigo-400 hover:border-blue-600 rounded-xl mx-auto w-fit ">
      <img
        src="/mypic.png"
        alt="bksarswal"
        className="rounded-lg w-[400px] sm:w-[400px] h-[400px] sm:h-[500px] object-cover "
      />
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