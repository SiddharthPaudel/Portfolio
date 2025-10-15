import React from "react";

const ProjectCard = ({ title, desc, tech, github }) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm mt-2 text-gray-700">{desc}</p>

    <div className="flex flex-wrap gap-2 mt-3">
      {tech.map((t) => (
        <span
          key={t}
          className="text-xs px-2 py-1 rounded-full bg-gray-100 border"
        >
          {t}
        </span>
      ))}
    </div>

    <a
      href={github}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:underline"
    >
      🔗 GitHub
    </a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "GamifyZone",
      desc: "Gamified learning platform (MERN).",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/Gamification",
    },
    {
      title: "MangaZone",
      desc: "Manga reader & rental app.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/MangaZone",
    },
    {
      title: "Quick Stay",
      desc: "Hotel booking platform.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/SiddharthPaudel/Hotel-Booking-",
    },
    {
      title: "Book Shelf",
      desc: "E-Book store (PostgreSQL).",
      tech: ["React", "PostgreSQL"],
      github:
        "https://github.com/SiddharthPaudel/E-Book-Store-Book-Self-",
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 mt-14">
      <h2 className="text-3xl font-semibold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
