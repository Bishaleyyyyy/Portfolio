import React from 'react'

const Portfolio = () => {
const portfolios = [
  {
    id :1,
    src: "work1.png"
  },
 
  {
    id : 2,
    src: "work2.png "
  },
  {
    id : 3,
    src: "work3.png "
  },
 
]



  return (
 <div name = "portfolio" className='bg-black w-full text-white md:h-screen'>
  <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>


      <p className='text-4xl font-bold inline border-b-2 border-blue-500 '>Portfolio</p>
      <p className='py-6'>Check out some of my work right here.</p>
    </div>

<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>

{
  portfolios.map(({is,src}) => (

    <div  className='shadow-md shadow-gray-600 rounded-lg '>
    <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105'/>

    <div className=' flex items-center justify-center'>
      <button className=' w-1/3 p-2 m-1 bg-transparent border border-1 rounded-sm animate-ping  hover:bg-[#B4182D]'>Demo Here</button>
</div>
</div>

  ))
}

  
</div>
    

  </div>
 </div>
  )
}
export default Portfolio