import React, { memo, useState, useEffect } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Expertise", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Hire Me", href: "#contact" },
];

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = ["skills", "about", "projects", "contact"];
      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Detects if section is in the focal area of the screen
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-8 left-0 right-0 z-[100] flex justify-center pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center gap-6 md:gap-10 px-8 py-3 rounded-full border transition-all duration-500 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              : "bg-white border-slate-100 shadow-sm"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative flex items-center gap-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-950"
                }`}
              >
                {item.label}

                {/* Active Indicator (The Black Dot) */}
                <AnimatePresence>
                  {isActive && (
                    <m.div
                      layoutId="navIndicator"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-900 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </nav>
      </m.header>
    </LazyMotion>
  );
});

export default Header;