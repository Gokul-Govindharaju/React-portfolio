import React, { useState, useEffect } from "react";
import Image from "../assets/img/logog.png";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev < 100) {
  //         return prev + 1;
  //       } else {
  //         clearInterval(interval);
  //         return prev;
  //       }
  //     });
  //   }, 30); // Adjust the speed of progress as needed

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-500 to-pink-300">
      <div className="relative w-80 h-80">
        <img
          src={Image}
          alt="Loading..."
          className="w-full h-full object-contain"
        />
        <div
          class="w-12 h-12 rounded-full animate-spin ml-[140px]
                    border-4 border-dashed border-white border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
