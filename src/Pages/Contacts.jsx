import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
const Contacts = () => {
  return (
    <>
      <section id="contact">
        <div className="flex items-center gap-8  p-8">
          <h1 className="text-3xl font-semibold font-heading">Contact Me</h1>
          <div className="h-[2px] w-[200px] bg-gradient-to-r from-slate-500 to-pink-300 ml-2"></div>
        </div>
        <motion.div className="flex flex-col sm:flex-row gap-3  p-6"  variants={fadeIn("down","tween",  0.06, 1)}>
          <div className=" bg-[#e9e4ef] rounded-lg p-4 grow">
            <h3 className="mb-3">
              <FontAwesomeIcon icon={faPhone} color="#8f79ad" width="20px" />
              <span className="ml-[8px] font-semibold">Phone:</span>
            </h3>
            <div className="ml-[28px] text-sm">+91 8667649008</div>
          </div>
          <div className=" bg-[#e9e4ef] rounded-lg p-4 grow">
            <h3 className="mb-3">
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                color="#8f79ad"
                width="20px"
              />
              <span className="ml-[8px] font-semibold">Email:</span>
            </h3>
            <div className="ml-[28px] text-sm">gokulgovindh04@gmail.com</div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contacts;
