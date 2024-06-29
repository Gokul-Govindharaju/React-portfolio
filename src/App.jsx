import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Loader from "./utils/Loader";
import "./App.css";
import { motion } from "framer-motion";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "/education", element: <Education /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contacts /> },
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate async data loading
    setTimeout(() => {
      setLoading(false); // Set loading to false after data is loaded
    }, 2500); // Adjust this timeout as per your application's needs
  }, []);

  return <>{loading ? <Loader /> :  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  ><RouterProvider router={router} />
   </motion.div>}</>;
}
export default App;
