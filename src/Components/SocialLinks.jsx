import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const SocialLinks = () => {
  return (
    <div className='flex flex-col  z-10 top-[35%] left-0 fixed'>
    <ul>
        <li className='flex justify-between items-center w-40 h-14 
        px-4 ml-[-100px] hover:ml-[-10px] rounded-md duration-300
         bg-[black]'>
            <a href="https://www.linkedin.com/in/bishal-kc01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='flex justify-between items-center w-full text-white
        '>
      
        <>LinkedIn<FaLinkedin size={30} /></></a></li>
    </ul>
    <ul>
        <li className='flex justify-between items-center w-40 h-14 
        px-4 ml-[-100px] hover:ml-[-10px] rounded-md duration-300
         bg-[black]'>
            <a href="https://github.com/Bishaleyyyyy/Bg-Changer-React" className='flex justify-between items-center w-full text-white
        '>
      
        <>GitHub<FaGithub size={30} /></></a></li>
    </ul>
    <ul>
        <li className='flex justify-between items-center w-40 h-14 
        px-4 ml-[-100px] hover:ml-[-10px] rounded-md duration-300
         bg-[black]'>
            <a href="https://www.instagram.com/dope.bishal/" className='flex justify-between items-center w-full text-white
        '>
      
        <>Facebook<FaFacebook size={30} /></></a></li>
    </ul>
    <ul>
        <li className='flex justify-between items-center w-40 h-14 
        px-4 ml-[-100px] hover:ml-[-10px] rounded-md duration-300
         bg-[black]'>
            <a href="https://www.instagram.com/dope.bishal/" className='flex justify-between items-center w-full text-white
        '>
      
        <>Instagram<FaInstagram size={30} /></></a></li>
    </ul>
    </div>
  )
}

export default SocialLinks