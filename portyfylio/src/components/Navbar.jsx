import React from "react";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[1000] bg-[#181818] flex justify-center px-4 md:px-[140px] py-5 ;">
      <ul className="flex items-center gap-4 md:gap-10 list-none;">
        <li><a href="#home" className=" text-white text-sm md:text-base no-underline transition duration-200 hover:text-green-400;">Home</a></li>
        <li><a href="#casestudy" className=" text-white text-sm md:text-base no-underline transition duration-200 hover:text-green-400;">Case Studies</a></li>
        <li><a href="#recentwork" className=" text-white text-sm md:text-base no-underline transition duration-200 hover:text-green-400;">Recent Work</a></li>
        <li><a href="#contact" className=" text-white text-sm md:text-base no-underline transition duration-200 hover:text-green-400;">Get In Touch</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
