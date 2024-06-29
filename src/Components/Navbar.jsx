import React from "react";
import classes from "./Navbar.module.css";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faStickyNote,
  faBriefcase,
  faAddressBook
 } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex">
      <motion.h1 className="font-cursive font-bold text-2xl p-10 ml-16"    initial="hidden"
      animate="show"
      variants={slideIn("left", 'tween', 0.1, 0.5)}>
        <span className="text-black">Gokul</span>
        <span className="linear-grad-text text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-pink-300 ml-2">Govindharaju</span>
      </motion.h1>
      <motion.nav className="absolute right-9 p-4"    initial="hidden"
      animate="show"
      variants={slideIn("right", 'tween',0, 1)}>
      <ul className="px-4 py-2  flex  rounded-lg">
        <li className="inline mr-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active :classes.inactive
            }
          >
            <FontAwesomeIcon icon={faHouse} />
            <span className="text-xs">Home</span>
          </NavLink>
        </li>
        <li className="inline mr-2">
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive ? classes.active :classes.inactive
            }
          >
            <FontAwesomeIcon icon={faStickyNote} />
            <span className="text-xs">Resume</span>
          </NavLink>
        </li>
        <li className="inline mr-2">
          
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? classes.active : classes.inactive
            }
          >
             <FontAwesomeIcon icon={faBriefcase} />
            <span className="text-xs">Projects</span>
          </NavLink>
        </li>
        <li className="inline mr-2">
          <NavLink
            to="/contact"
           
            className={({ isActive }) =>
              isActive ? classes.active : classes.inactive
            }
          >
             <FontAwesomeIcon icon={faAddressBook} />
            <span className="text-xs">Contact</span>
          </NavLink>
        </li>
      </ul>
    </motion.nav>
    </header>
    
  );
};

export default Navbar;
