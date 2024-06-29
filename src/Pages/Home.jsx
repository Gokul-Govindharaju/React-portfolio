import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
const Home = () => {
  return (
    <>
      <section id="about-me">
        <motion.div className="flex items-center gap-8  p-8 custom-1147:p-6" variants={textVariant()}>
          <h1 className="text-3xl font-semibold font-heading text-nowrap">
            About Me
          </h1>
          <div className="h-[2px] w-[200px] bg-gradient-to-r from-slate-500 to-pink-300 ml-2"></div>
        </motion.div>
        <motion.p className="px-8 pb-3"  variants={textVariant()}>
          Hello! I'm Gokul Govindharaju, a passionate and dedicated MERN stack
          developer with a knack for creating dynamic and responsive web
          applications. With a strong foundation in the MERN (MongoDB,
          Express.js, React, Node.js) stack, I bring a blend of creativity and
          technical expertise to every project I undertake.Over the years, I've
          honed my skills through rigorous coursework, hands-on projects, and
          continuous learning.
        </motion.p>

        <motion.div className="px-8 pb-3"  variants={textVariant()}>
          <h3 class="sm:mb-2 mb-4 text-xl font-bold"> skills:</h3>
          <div class="flex flex-wrap gap-3 ">
            <span class="p-2 text-sm bg-[#E1E8EF] rounded-md">Html5</span>
            <span class="p-2 text-sm bg-[#E1E8EF] rounded-md">Css3</span>
            <span class="p-2 text-sm bg-[#E1E8EF] rounded-md">Javascript</span>
            <span class="p-2 text-sm bg-[#E1E8EF] rounded-md">
              Tailwind css
            </span>
            <span class="p-2 text-sm bg-[#E1E8EF] rounded-md">React</span>
            <span class="p-2 text-sm bg-[#E1E8EF] rounded-md">Nodejs</span>
            <span class="p-2 text-sm bg-[#E1E8EF] rounded-md">Expressjs</span>
            <span class="p-2 text-sm bg-[#E1E8EF] rounded-md">MongoDB</span>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
