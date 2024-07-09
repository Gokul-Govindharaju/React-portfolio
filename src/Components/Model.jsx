import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from 'react-dom';
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 2 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 2 } },
};

const Model = ({ isOpen, onClose, certificateUrl }) => {
  if (!isOpen) return null;
  const modalRoot = document.getElementById("portal-root");
  const modalElement = (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 bg-black w-full bg-opacity-50 flex justify-center items-center "
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg p-4 max-w-md md:max-w-2xl  lg:max-w-3xl w-full"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
        >
          <button onClick={onClose} className="float-right text-red-500">
            X
          </button>
          <h2 className="text-xl font-bold mb-4">Udemy Certificate</h2>
          <img
            src={certificateUrl}
            alt="Udemy Certificate"
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
  return ReactDOM.createPortal(modalElement, modalRoot);
};

export default Model;
