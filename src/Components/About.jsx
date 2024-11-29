import React from 'react'
import { FaStackOverflow } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import "./tech.css"




const About = () => {
  return (
 <div name= "about" className='bg-[black] text-white'>
<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full md:flex-row'>
    <div className='pb-8'>
    <p className='text-4xl mt-36 font-bold inline border-b-4 border-blue-500 md:mb-20'>
        ABOUT
        </p>
    
    

    </div>
    <p className='mr-4 md:mt-36'>My name is Bishal Kc and I'm Computer Science Student from Dang. I am currently pursuing Bachelor Degree in Computer Science and Information Technology(CSIT) at TU of Mahemdra Multiple Campus Dang. </p>
   <br />
   <div className='flex gap-10 justify-center mb-5 mt-4 text-6xl z-999 mx-auto md:mt-48 mr-24'>
   <a href="https://stackoverflow.com/users/26854831/bishal-kc"><FaStackOverflow className='border animate-bounce bottom-1 p-2 rounded-lg outline-none bg-transparent cursor-pointer hover:bg-[#B4182D] duration-300 '/></a>


   <a href="https://medium.com/@bishalskylord"><FaMediumM className='border animate-bounce bottom-1 p-2 rounded-lg outline-none bg-transparent cursor-pointer hover:bg-[#B4182D] duration-300 ' /></a>
   </div>
   <div>
    <img src="./Profile2.png" alt=""  className=' mt-12 w-[300px] h-[300px] mx-auto md:w-[900px] md:h-[250px]'/>
   </div>
</div>

<div className='logos'>
<div className='logos-slider'>
  <img src="html2.png" alt="HTML" />
  <img src="css.png" alt="CSS" />
  <img src="Js.png" alt="JS" />
  <img src="React.png" alt="REACT" />
  <img src="Tailwind.png" alt="TAILWIND" />
  <img src="figma.png" alt="FIGMA" />
  <img src="Mongo.png" alt="MONGO" />
  <img src="html2.png" alt="HTML" />
  <img src="css.png" alt="CSS" />
  <img src="Js.png" alt="JS" />
  <img src="React.png" alt="REACT" />
  <img src="Tailwind.png" alt="TAILWIND" />
  <img src="figma.png" alt="FIGMA" />
  <img src="Mongo.png" alt="MONGO" />

</div>
</div>









 </div>
 
 
  )
}

export default About