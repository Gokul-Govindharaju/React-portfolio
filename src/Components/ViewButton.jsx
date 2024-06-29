import React from "react";
const ViewButton = ({ onClick, src, alt }) => {
  return (
    <>
      <div className="bg-[#F2F5F9] p-6 shadow-md rounded-lg lg:p-5 flex flex-col md:mt-4 ">
        <img src={src} alt={alt} className="w-20 h-20 self-center " />
        <button
          class="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
          onClick={onClick}
        >
          View Certificate
        </button>
      </div>
    </>
  );
};

export default ViewButton;
