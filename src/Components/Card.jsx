import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Card = ({ title, content, year }) => {
  return (
    <div className="bg-[#F2F5F9]  p-8 shadow-md rounded-lg lg:p-5 md:p-7 relative "
    >
      <div class="absolute top-0 left-0  bg-zinc-300 p-1 md:p-0.5 rounded-lg text-xs text-center">
        {year}
      </div>
      <h2 className="text-lg text-nowrap   mb-2 font-semibold">{title}</h2>
      <p className="text-nowrap text-sm sm:">{content}</p>
    </div>
  );
};

export default Card;
