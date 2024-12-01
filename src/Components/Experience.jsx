import React from 'react'

const Experience = () => {

const techs =[
    {
    id:1,
    src:"Html3.png",
    title:'HTML',
    style:'shadow-orange-500'
},
{
    id:2,
    src:"css.png",
    title:'CSS',
    style:'shadow-blue-500'
},

{
    id:3,
    src:"React1.png",
    title:'REACT',
    style:'shadow-blue-600'
},

{
    id:4,
    src:"tailwind1.png",
    title:'TAILWIND CSS',
    style:'shadow-sky-400'
},

{
    id:5,
    src:"mongo2.png",
    title:'MONGO DB',
    style:'shadow-green-500'
},

{
    id:6,
    src:"c++.png",
    title:'C++',
    style:'shadow-blue-500'
},
{
    id:7,
    src:"c.png",
    title:'C',
    style:'shadow-blue-500'
},
{
    id:8,
    src:"figma1.png",
    title:'FIGMA',
    style:'shadow-red-500'
},
{
    id:9,
    src:"Js.png",
    title:'JAVASCRIPT',
    style:'shadow-yellow-500'
},
{
    id:10,
    src:"vite.png",
    title:'VITE',
    style:'shadow-blue-500'
},
{
    id:11,
    src:"github.png",
    title:'VITE',
    style:'shadow-gray-500'
},


]

  return (
    <div name= "experience" className='bg-black w-full h-screen'>

<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>


    <div>
        <p className='text-4xl font-bold border-b-2 border-blue-500 p-2 inline '>EXPERIENCE</p>
        <p className='py-6'>These are the technologies I've worked with. </p>
    </div>

    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  py-8 px-12 sm:px-0'>


{
    techs.map(({id,src,title,style}) => (
        

        
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt=""  className='w-20 mx-auto'/>
            <p className='mt-4'>{title}</p>
        </div>
    ))
}








    </div>
</div>

    </div>
  )
}

export default Experience