import React, { memo } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import profilePic from "../images/pic.jpg"; // 👈 Your image path

const HeroContent = memo(() => {
  const social = {
    github: "https://github.com/SiddharthPaudel",
    linkedin: "https://www.linkedin.com/in/siddharth-paudel-53911032b/",
    instagram: "https://www.instagram.com/cddharth_99/",
    whatsapp: "https://wa.me/9849800636",
  };

  return (
    <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      {/* Text Section */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Hi, I’m <span className="text-primary">Siddhartha</span> — a Frontend Developer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-gray-700 max-w-xl"
        >
          I craft responsive, user-friendly web applications using React, Tailwind CSS,
          and modern frontend tools. Passionate about clean UI, accessibility, and smooth
          user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {/* GitHub */}
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-700 transition-all"
          >
            <FaGithub className="text-lg" /> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition-all"
          >
            <FaLinkedin className="text-blue-600 text-lg" /> LinkedIn
          </a>

          {/* Instagram */}
          <a
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition-all"
          >
            <FaInstagram className="text-pink-500 text-lg" /> Instagram
          </a>

          {/* WhatsApp */}
          <a
            href={social.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm hover:bg-gray-100 transition-all"
          >
            <FaWhatsapp className="text-green-500 text-lg" /> WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <div className="w-full max-w-md bg-gradient-to-tr from-white to-gray-50 rounded-2xl p-6 shadow-lg border">
          {/* Profile Picture */}
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-md">
            <img
              src={profilePic}
              alt="Siddhartha Paudel"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center mt-4">
            <div className="font-semibold">Siddhartha Paudel</div>
            <div className="text-sm text-gray-600">
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
