import React, { memo } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import profilePic from "../images/pic.jpg";

const HeroContent = memo(() => {
  const social = {
    github: "https://github.com/SiddharthPaudel",
    linkedin: "https://www.linkedin.com/in/siddharth-paudel-53911032b/",
    instagram: "https://www.instagram.com/cddharth_99/",
    whatsapp: "https://wa.me/9849800636",
  };

  return (
    <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
      {/* Text Section */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold font-heading leading-tight"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Siddhartha
          </span>{" "}
          — a Frontend Developer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-gray-700 max-w-xl text-lg font-sans"
        >
          I craft responsive, user-friendly web applications using React, Tailwind CSS,
          and modern frontend tools. Passionate about clean UI, accessibility, and smooth
          user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {Object.entries(social).map(([key, link]) => {
            const icons = {
              github: <FaGithub />,
              linkedin: <FaLinkedin />,
              instagram: <FaInstagram />,
              whatsapp: <FaWhatsapp />,
            };
            return (
              <a
                key={key}
                href={link}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105 shadow-md`}
                style={{
                  color:
                    key === "linkedin"
                      ? "#0A66C2"
                      : key === "instagram"
                      ? "#E1306C"
                      : key === "whatsapp"
                      ? "#25D366"
                      : "#fff",
                  backgroundColor: key === "github" ? "#171515" : "transparent",
                  border: key === "github" ? "none" : "1px solid #ddd",
                }}
              >
                {icons[key]} {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        className="flex justify-center"
      >
        <div className="w-full max-w-md p-6 rounded-3xl bg-white/30 backdrop-blur-md shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-500">
          {/* Profile Picture */}
          <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
            <img
              src={profilePic}
              alt="Siddhartha Paudel"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center mt-6">
            <div className="font-bold text-2xl text-gray-800">Siddhartha Paudel</div>
            <div className="text-sm text-gray-600 mt-1">
              BSc (Hons) Computing — Softwarica College
            </div>
            <div className="text-sm text-gray-600 mt-2">
              Kageshowri, Kathmandu • +977 9849800636
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

const Hero = () => (
  <LazyMotion features={domAnimation}>
    <HeroContent />
  </LazyMotion>
);

export default Hero;
