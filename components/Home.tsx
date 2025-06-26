import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className="w-full ">      
      <section className="relative flex items-center min-h-screen">  
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row items-center">        
            <div className="md:w-1/2">
              <div className='sapce-y-4'>
                <span className='text-4xl text-white font-bold'> I am Bholu Saini</span>
                <h1  className='text-8xl text-[#8e5bf8] font-bold' >Full Stack Web Developer</h1>

                <p className='text-lg text-gray-200 font-medium'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eos assumenda sunt qui, incidunt odio asperiores inventore quae provident! Obcaecati, repellendus? Et, iusto praesentium! Explicabo, minus? Fugit aut inventore ea.
                </p>

                <div className='py-8 text-start'>
                  <button className='border border-blue-400 text-blue-400 hover:text-white text-lg font-bold hover:bg-blue-500 px-4 py-3 rounded-full'>Download CV *</button>
                </div>
              </div>
            </div>  
                    
           <div className="hidden md:block md:w-1/2">
            <div className="flex justify-center items-center border-2 border-blue-400 p-4 mx-auto w-fit">
              <img
                src="mypic.png"
                alt="bksarswal"
                className="rounded-lg w-[400px] h-[400px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              />
            </div>
           </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Home