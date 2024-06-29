import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Omni from "../assets/img/omnifood-logo.png";
import Tour from "../assets/img/logo-green.png";
const Projects = () => {
  const projects = [
    {
      name: "Omnifood",
      techStack: ["HTML", "CSS"],
      url: "",
      img: Omni,
      desc: "This project focuses on creating a stunning, responsive website using HTML5 and CSS3.It is a static website about food delivery.Developed a website with the help of figma template.",
      code: "https://github.com/Gokul-Govindharaju/Natours",
    },
    {
      name: "Natours",
      img:Tour,
      techStack: ["Node js", "Express.js", "MongoDB", "pug Template"],
      url: "",
      desc: "Developed a Tour booking application from scratch, incorporating features such as signup, login, image and profile picture uploading, and implemented JWT tokens for authentication",
      code: "https://github.com/Gokul-Govindharaju/omnifoodwebsite",
    },
  ];
  return (
   <>
   <section id='project'>
   <div className="flex items-center gap-8  p-8">
        <h1 className="text-3xl font-semibold font-heading">Projects</h1>
        <div className="h-[2px] w-[200px] bg-gradient-to-r from-slate-500 to-pink-300 ml-2"></div>
      </div>
      <motion.div className='grid grid-cols-1 p-6 sm:grid-cols-2 gap-6 sm:gap-3 '  variants={fadeIn("down","tween",  0.06, 1)}>
      {projects.map((project) => {
          return (
            <div key={project.name} className="shadow-xl px-5 py-2 grow">
              <img
                src={project.img}
                className="rounded-lg object-cover mb-2"
              />
              <h3 className="text-lg font-semibold font-heading mb-2">
                {project.name}
              </h3>
              <p className="text-sm">{project.desc}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                {project.techStack.map((tech) => {
                  return (
                    <span key={tech} className="p-1 text-xs bg-[#E1E8EF] rounded-md">
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between mt-4">
                {/* <a href={project.url} target="_blank" className=" hover:underline">
                  <FontAwesomeIcon icon={faLink} size="1" color="#ff9C1A" />
                  <span className="ml-2 text-xs ">url</span>
                </a> */}
                <a href={project.code} target="_blank" className=" hover:underline">
                  <FontAwesomeIcon icon={faGithub} size="1" className='bg-[#8f79ad] roundex-sm' color="#ffffff" />
                  <span className="ml-2 text-xs">code</span>
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
   </section>
     
   </>
  )
}

export default Projects