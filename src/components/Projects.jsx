import React from "react";
import Gamify from "../images/gamify.png";
import Manga from "../images/manga.png";
import Quick from "../images/quickStay.png";
import Business from "../images/business.png";
import port from "../images/port.png";
import finance from "../images/finance.png";

const ProjectCard = ({ title, desc, tech, github, image }) => (
  <div className="group rounded-xl border border-gray-200 overflow-hidden transition hover:border-purple-500/40">
    
    {/* Image */}
    <div className="h-44 overflow-hidden bg-gray-100">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 text-sm font-medium text-purple-600 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "GamifyZone",
      desc: "Gamified learning platform built with MERN stack.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/Gamification",
      image: Gamify,
    },
    {
      title: "MangaZone",
      desc: "Manga reader and rental platform.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/MangaZone",
      image: Manga,
    },
    {
      title: "Quick Stay",
      desc: "Hotel booking web application.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/Hotel-Booking-",
      image: Quick,
    },
    {
      title: "Business Sales & Finance",
      desc: "Business sales and finance management system.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      github:
        "https://github.com/SiddharthPaudel/Business-Sales-Finance-Management-System",
      image: Business,
    },
    {
      title: "Portfolio",
      desc: "Personal developer portfolio website.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/SiddharthPaudel/Portfolio",
      image: port,
    },
    {
      title: "Finance Tracker",
      desc: "Track personal finance, expenses, and budgets.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/Finance-Tracker",
      image: finance,
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        Projects
      </h2>
      <p className="text-center text-gray-600 mt-2">
        A selection of projects I’ve worked on
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
