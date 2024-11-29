import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { BsFileEarmarkPdf } from "react-icons/bs";
const Home  = () => {
  return (
    <div name = "home" className=' h-screen w-full bg-[black] text-white'
    >

    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
    h-full px-4 md:flex-row'>

      <div>
        <h2 className='text-4xl mt-24 font-bold'>
          I'm a <span className='text-[#ED9E59] mb-2'>  Frontend Developer</span> 
          </h2>

        <p className= 'mt-2 text-gray-300'>
          From Nepal,Dang. <br />

          <span className='text-[#ED9E59] font-bold'>Let's Explore</span>
          </p>
          <div>
          <button className='group  animate-bounce  text-white w-fit px-6 py-3 my-5 flex items-center rounded-md
          bg-gradient-to-r from-cyan-500 to-blue-500'>Porfolio
            <span className='group-hover:rotate-90 duration-300'>
             <FaArrowRight  className='mx-2'/>
            </span>
            
            </button>
            <button className='group text-white  animate-bounce w-fit px-6 py-3  my-2 flex items-center rounded-md
          bg-gradient-to-r from-cyan-500 to-blue-500 md:flex-row '>Check Resume <span className='group-hover:rotate-90 duration-300'>
            <BsFileEarmarkPdf  className='mx-2'/>
            </span>
            
            </button>
          </div>
      </div>

      <div>
        <img src="./Profile1.png" alt="Photo" className='  mt-4 mx-auto  md:ml-28  w-3/4   md:mt-12 md:w-[400px]'/>
      </div>

    </div>
    </div>

  )
}

export default Home