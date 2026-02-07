import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-semibold text-gray-900 tracking-tight"
        >
          Siddhartha Paudel<span className="text-purple-600">.</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {["Projects", "Skills & Education", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-gray-900 transition-colors duration-200
                         after:absolute after:-bottom-1 after:left-0 after:h-[1px]
                         after:w-0 after:bg-purple-500 hover:after:w-full
                         after:transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full px-4 py-1.5
                     text-xs font-medium border border-gray-300 text-gray-900
                     hover:border-purple-500 hover:text-purple-600 transition"
        >
          Let’s talk
        </a>
      </div>
    </header>
  );
};

export default Header;
