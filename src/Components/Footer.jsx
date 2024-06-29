import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="flex  justify-center items-center">
          <p>Copyright &copy; {currentYear} Gokul Govindharaju</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
