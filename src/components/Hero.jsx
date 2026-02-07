import React, { memo } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import profilePic from "../images/pic.jpg";

const HeroContent = memo(() => {
  const social = {
    github: "https://github.com/SiddharthPaudel",
    linkedin: "https://www.linkedin.com/in/siddharth-paudel-53911032b/",
    instagram: "https://www.instagram.com/cddharth_99/",
    whatsapp: "https://wa.me/9849800636",
  };

  const icons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    whatsapp: FaWhatsapp,
  };

  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 pt-28 pb-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text Section */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
          >
            Hi, I’m{" "}
            <span className="text-purple-500">
              Siddhartha Paudel
            </span>{" "}
            — a Frontend Developer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg text-gray-600 max-w-xl"
          >
            I craft responsive, user-friendly web applications using React,
            Tailwind CSS, and modern frontend tools. Passionate about clean UI,
            accessibility, and smooth user experience.
          </motion.p>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-5"
          >
            {Object.entries(social).map(([key, link]) => {
              const Icon = icons[key];
              return (
                <a
                  key={key}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-xl"
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="text-center">
            <div className="w-44 h-44 mx-auto rounded-full overflow-hidden">
              <img
                src={profilePic}
                alt="Siddhartha Paudel"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-5">
              <p className="font-medium text-gray-900 text-lg">
                Siddhartha Paudel
              </p>
              <p className="text-sm text-gray-600">
                BSc (Hons) Computing — Softwarica College
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Kageshowri, Kathmandu • +977 9849800636
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

const Hero = () => (
  <LazyMotion features={domAnimation}>
    <HeroContent />
  </LazyMotion>
);

export default Hero;
