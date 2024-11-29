import { useState } from 'react';
import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {

    const[Nav, setNav] =useState(false)


  return (
    <div className='flex justify-between items-center h-20 w-full
    text-white px-4 bg-[#26415E] fixed z-10'>
        <div>
            <h1 className='text-5xl font-signature
            ml-2'>Bishal</h1>

            </div>
            <ul className='hidden md:flex'>
                <li className='px-4 cursor-pointer capitalize font-medium
                text-white hover:scale-125 duration-200'>Home</li>
                                <li className='px-4 cursor-pointer capitalize font-medium
                 text-white hover:scale-125 duration-200'>About</li>
                                <li className='px-4 cursor-pointer capitalize font-medium
               text-white hover:scale-125 duration-200'>Portfolio</li>
                                <li className='px-4 cursor-pointer capitalize font-medium
                text-white hover:scale-125 duration-200'>Blog</li>
                                <li className='px-4 cursor-pointer capitalize font-medium
                text-white hover:scale-125 duration-200'>Contact</li>
            </ul>

           <div onClick={()=> setNav(!Nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
               {Nav? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {Nav &&(
                <ul className='flex flex-col justify-center items-center absolute
        top-0 left-0 w-full h-screen bg-[#26415E]'>
<li className='px-4 capitalize cursor-pointer py-6
text-4xl hover:scale-125 duration-200'>Home</li>
<li className='px-4 capitalize cursor-pointer py-6
text-4xl hover:scale-125 duration-200'>About</li>
<li className='px-4 capitalize cursor-pointer py-6
text-4xl hover:scale-125 duration-200'>Portfolio</li>
<li className='px-4 capitalize cursor-pointer py-6
text-4xl hover:scale-125 duration-200'>Blog</li>
<li className='px-4 capitalize cursor-pointer py-6
text-4xl hover:scale-125 duration-200'>Contact</li>

 </ul>
     )}
        
    </div>
  )
}

export default Navbar