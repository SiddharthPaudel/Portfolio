import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const navLinks = [
    { to: "projects", label: "Projects" },
    { to: "skills-about", label: "Skills & About" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="py-4 shadow-md bg-white/30 backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
            SP
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-800">Siddhartha Paudel</div>
            <div className="text-xs text-gray-500">Frontend Developer</div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={400}
              offset={-80} // Prevents content from hiding behind header
              activeClass="text-purple-500 font-semibold border-b-2 border-purple-500 pb-1"
              className="cursor-pointer text-gray-700 hover:text-purple-500 transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
