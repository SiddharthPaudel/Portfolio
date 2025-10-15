import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const navLinks = [
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "about", label: "About" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="py-6 shadow-sm bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            SP
          </div>
          <div>
            <div className="text-sm font-semibold">Siddhartha Paudel</div>
            <div className="text-xs text-gray-600">Frontend Developer</div>
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
              duration={300}
              offset={-70} // Prevents content from hiding behind header
              activeClass="text-primary font-semibold"
              className="cursor-pointer hover:text-primary transition-colors"
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
