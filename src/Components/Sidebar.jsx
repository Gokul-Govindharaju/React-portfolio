import React from "react";
import resume from '../../public/Gokul resume2024.pdf';
import Profile from "../assets/img/file.png";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaPhoneSquareAlt,
  FaGithub,
} from "react-icons/fa";
import {
  MdAttachEmail,
  MdLocationPin,
  MdOutlineFileDownload,
} from "react-icons/md";
const Sidebar = () => {
  return (
    <>
      <motion.aside initial="hidden"
      animate="show"
      exit="hidden"
      variants={fadeIn('down', 'tween', 0.1,1)}>
        <div className=" mt-16 ml-8">
          {/* Sidebar */}
          <div className="text-white">
            <div className="p-3 relative w-96  sm:w-96">
              {/* Profile Card */}
              <div className="bg-white shadow-2xl rounded-lg p-4 custom-1170:h-[500px] ">
                <img
                  src={Profile}
                  alt="Profile"
                  className="absolute object-cover top-0 left-1/2 transform -translate-x-1/2 -mt-8 w-36 h-36  rounded-lg bg-zinc-300 scale-150"
                  loading="lazy"
                />
                <div className="flex flex-col items-center mt-32">
                  <h2 className="text-lg font-bold text-black">
                    Gokul Govindharaju
                  </h2>
                  <p className="text-gray-500 text-sm">Full Stack Developer</p>
                </div>
                <div className="">
                  <ul className="py-3   flex items-center justify-center gap-x-5">
                    <li className="flex flex-col items-center ">
                      <a
                        href="https://www.linkedin.com/in/gokul-g-5aa6b9250/"
                        target="_blank"
                      >
                        <FaLinkedin className="text-sky-600 h-6 w-6" />
                      </a>
                    </li>
                    <li className="flex flex-col items-center ">
                      <a
                        href="https://github.com/Gokul-Govindharaju"
                        target="_blank"
                      >
                        <FaGithub className="text-neutral-800 h-6 w-6" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="p-2 mt-2 w-64 bg-[#F2F5F9]  rounded-md  mx-auto">
                    <li className="flex items-center  gap-x-4 ">
                      <FaPhoneSquareAlt className="text-green-500" />
                      {/* <div className="text-stone-700">+91 8667649008</div> */}
                      <div className="flex flex-col">
                        <span className="opacity-60  text-black text-base">
                          phone
                        </span>
                        <span className="text-black  font-semibold">
                          +91 8667649008
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center  gap-x-4 border-t-2 border-slate-300 mt-2 ">
                      <MdAttachEmail className="text-red-500" />
                      <div className="flex flex-col">
                        <span className="opacity-60  text-black text-base">
                          Email
                        </span>
                        <span className="text-black  font-semibold">
                          gokulgovindh04@gmail.com
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center  border-t-2 border-slate-300 mt-2 gap-x-4">
                      <MdLocationPin className="text-sky-800" />
                      <div className="flex flex-col">
                        <span className="opacity-60  text-black text-base">
                          Location
                        </span>
                        <span className="text-black  font-semibold">
                          chennai,India
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-3 border-t mx-8 mt-2">
                  <a
                    className=" block mx-auto rounded-full linear-grad-text bg-gradient-to-r from-slate-500 to-pink-300  hover:shadow-lg font-semibold text-white px-6 py-2 flex items-center justify-center gap-x-2"
                    href={resume}
                    download="Gokul resume2024.pdf"
                    
                  >
                    <MdOutlineFileDownload className="" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
