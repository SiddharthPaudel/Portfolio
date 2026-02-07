import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills & Education", href: "#skills-education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0B1220]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-semibold text-white tracking-tight"
        >
          Siddhartha Paudel<span className="text-sky-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative hover:text-white transition-colors
                         after:absolute after:-bottom-1 after:left-0 after:h-[1px]
                         after:w-0 after:bg-sky-400 hover:after:w-full
                         after:transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full px-4 py-1.5
                     text-xs font-medium border border-slate-500 text-white
                     hover:border-sky-400 hover:text-sky-400 transition"
        >
          Let’s talk
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1220] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400 transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full px-4 py-2
                         text-xs font-medium border border-slate-500 text-white
                         hover:border-sky-400 hover:text-sky-400 transition"
            >
              Let’s talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
