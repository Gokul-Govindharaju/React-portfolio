import { Outlet, useLocation } from "react-router-dom";
import { fadeIn } from "../utils/motion";
import Sidebar from "../Components/Sidebar";
import Home from "../Pages/Home";
import Education from "../Pages/Education";
import Projects from "../Pages/Projects";
import Contacts from "../Pages/Contacts";
import Navbar from "../Components/Navbar";
import useIsMobile from "../utils/Device";
import Footer from "../Components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "../utils/SectionWrapper";
const Root = () => {
  const location = useLocation();

  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={fadeIn("down", "tween", 0.1, 0.75)}
              className="w-full bg-white p-4"
            >
              <header className="flex flex-col justify-center items-center gap-10">
                <h1 className="font-cursive font-bold text-2xl ">
                  <span className="text-black">Gokul</span>
                  <span className="linear-grad-text text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-pink-300">
                    Govindharaju
                  </span>
                </h1>
                <Sidebar /> 
              </header>
              {SectionWrapper(Home, "home")()}
              {SectionWrapper(Education, "education")()}
              {SectionWrapper(Projects, "projects")()}
              {SectionWrapper(Contacts, "contacts")()}
              <Footer />
            </motion.div>
          </AnimatePresence>
        </main>
      ) : (
        <main className="bg-[#F2F5F9] h-screen w-full px-4">
          <Navbar />
          <div className="flex gap-4 md:gap-2 bg-[#F2F5F9] ">
            <Sidebar />
            <AnimatePresence mode="wait">
              <motion.div
                className="bg-white mt-20 rounded-md  h-full w-full mr-7"
                key={location.pathname}
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={fadeIn("down", "tween", 0.1, 0.75)}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      )}
    </>
  );
};

export default Root;
