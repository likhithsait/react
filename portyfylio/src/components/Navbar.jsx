import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-[1000] bg-[#181818]">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-center px-2 sm:px-4 md:px-[140px] py-3 sm:py-5">
        <ul className="flex items-center gap-2 sm:gap-4 md:gap-10 list-none">
          <li>
            <a
              href="#home"
              className="whitespace-nowrap text-[12px] sm:text-sm md:text-base transition duration-200 text-white hover:text-green-400"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#casestudy"
              className="whitespace-nowrap text-[12px] sm:text-sm md:text-base transition duration-200 text-white hover:text-green-400"
            >
              Case Studies
            </a>
          </li>

          <li>
            <a
              href="#recentwork"
              className="whitespace-nowrap text-[12px] sm:text-sm md:text-base transition duration-200 text-white hover:text-green-400"
            >
              Recent Work
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="whitespace-nowrap text-[12px] sm:text-sm md:text-base transition duration-200 text-white hover:text-green-400"
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
