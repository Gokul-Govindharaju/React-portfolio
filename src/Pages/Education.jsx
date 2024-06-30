import React from "react";
import { motion } from "framer-motion";
import Card from "../Components/Card";
import { useState } from "react";
import Model from "../Components/Model";
import ViewButton from "../Components/ViewButton.jsx";
import { fadeIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const imageButton = [
  {
    id: 1,
    imageSrc: "../assets/img/HC.png",
    imageUrl: "../assets/img/UC-1.jpg",
  },
  {
    id: 2,
    imageSrc: "../assets/img/JS.png",
    imageUrl: "../assets/img/UC-2.jpg",
  },
 {
    id: 3,
    imageSrc: "../assets/img/React.png",
    imageUrl: "../assets/img/UC-3.jpg",
  },
 {
    id: 4,
    imageSrc: "../assets/img/node.png",
    imageUrl: "../assets/img/UC-4.jpg",
  },
];

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificateUrl, setCertificateUrl] = useState("");
  const handleViewClick = (url) => {
    setCertificateUrl(url);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCertificateUrl("");
  };
  return (
    <>
      <section id="resume">
        <motion.div className="flex items-center gap-8  p-8 custom-1147:p-6 md:p-4" variants={textVariant()}>
          <h1 className="text-3xl font-semibold font-heading text-nowrap " >
            My Resume
          </h1>
          <div className="h-[2px] w-[200px] bg-gradient-to-r from-slate-500 to-pink-300 ml-2"></div>
        </motion.div>
        {/* <div className="flex flex-wrap justify-center items-center "> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8">
          <div className="flex flex-col justify-center gap-4 mb-4">
            <div className="items-start">
              <h3 className="text-lg font-semibold">
                <FontAwesomeIcon icon={faGraduationCap} color="#8f79ad" />
                <span className="ml-3">Education:</span>
              </h3>
            </div>
            <Card
              title="Bachelor of Engineering"
              content="Karpagam College of Engineering"
              year="Aug 2017 - Mar 2021"
            />
          </div>
          <div className="flex flex-col justify-center gap-4  mb-4 ">
            <div className="items-start ">
              <h3 className="text-lg font-semibold ">
                <FontAwesomeIcon icon={faBriefcase} color="#8f79ad" />
                <span className="ml-3">Experience:</span>
              </h3>
            </div>
            <Card
              title="Web Application Intern"
              content="Novalnet e-Solutions"
              year="Aug 2023 - Jan 2024"
            />
          </div>
        </div>
        {/* </div> */}
        <div className="ml-8">
          <h3 className="text-lg font-semibold md:mt-4 ">
            <FontAwesomeIcon icon={faBriefcase} color="#8f79ad" />
            <span className="ml-3">Udemy Certifications:</span>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center p-5 custom-1170:p-3 custom-1147:p-3">
          <motion.div className="grid grid-cols-2 gap-4 lg:grid-cols-4 "  variants={fadeIn("down","tween",  0.06, 1)}>
            {imageButton.map((button) => (
              <ViewButton
                key={button.id}
                onClick={() => handleViewClick(button.imageUrl)}
                src={button.imageSrc}
              />
            ))}
          </motion.div>
        </div>
        <Model
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          certificateUrl={certificateUrl}
        />
      </section>
    </>
  );
};

export default Education;
