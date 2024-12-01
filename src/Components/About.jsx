import React from "react";
import { FaStackOverflow } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import "./tech.css";

const About = () => {
  const logos = [
    { src: "/html2.png", alt: "HTML" },
    { src: "/css.png", alt: "CSS" },
    { src: "/Js.png", alt: "JavaScript" },
    { src: "/React.png", alt: "React" },
    { src: "/Tailwind.png", alt: "Tailwind CSS" },
    { src: "/figma.png", alt: "Figma" },
    { src: "/mongo2.png", alt: "MongoDB" },
  ];

  return (
    <div name="about" className="w-full bg-[black] text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-2 border-blue-500">
            ABOUT
          </p>
        </div>
        <p className="text-2xl mt-20 ">
          My name is Bishal Kc and I'm a Computer Science student from Dang. I
          am currently pursuing a Bachelor's degree in Computer Science and
          Information Technology (CSIT) at TU of Mahendra Multiple Campus, Dang.
        </p>
        <br />
        <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, aliquid obcaecati! Voluptatibus cupiditate, reiciendis ipsa doloremque expedita voluptates aspernatur laborum, porro aut nobis temporibus qui molestias, soluta ea dolorem atque!</p>
        </div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
      <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-2 border-blue-500 ">
            MY TECHSTACK
          </p>
        </div>
        </div>
        
        <div className="logos ">
        <div className="logos-slider">
          {Array(10)
            .fill(logos)
            .flat()
            .map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} />
            ))}
        </div>
      </div>
    </div>
  );
};


export default About