import React from "react";
import Gamify from "../images/gamify.png";
import Manga from "../images/manga.png";
import Quick from "../images/quickStay.png";
import Business from "../images/business.png";
import port from "../images/port.png";
import finance from "../images/finance.png"
const ProjectCard = ({ title, desc, tech, github, image }) => (
  <div className="bg-white/30 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    {/* Project Image */}
    <div className="relative h-48 overflow-hidden rounded-t-3xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 mt-5 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
      >
        🔗 View on GitHub
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "GamifyZone",
      desc: "Gamified learning platform (MERN).",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/Gamification",
      image: Gamify,
    },
    {
      title: "MangaZone",
      desc: "Manga reader & rental app.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/MangaZone",
      image: Manga,
    },
    {
      title: "Quick Stay",
      desc: "Hotel booking platform.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/Hotel-Booking-",
      image: Quick,
    },
    {
      title: "Business-Sales-Finance-Management-System",
      desc: "Sales-Finance-Management-System",
      tech: ["NextJS", "Node.js", "MongoDB"],
      github:
        "https://github.com/SiddharthPaudel/Business-Sales-Finance-Management-System",
      image: Business,
    },
    {
      title: "Portfolio",
      desc: "My Portfolio.",
      tech: ["React", "Node.js", "Tailwind CSS"], // technologies used
      github: "https://github.com/SiddharthPaudel/Portfolio",
      image: port, // import your image at the top
    },
    {
    title: "Finance Tracker",
    desc: "Track your personal finance, expenses, and budget easily.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/SiddharthPaudel/Finance-Tracker",
    image: finance
  }

  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 relative inline-block">
        Projects
        <span className="block w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
