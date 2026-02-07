import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SkillsAbout = () => {
  const technicalSkills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
    "REST APIs",
    "Agile",
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Adaptability",
    "Attention to Detail",
    "Presentation",
  ];

  return (
    <section
      id="skills & education"
      className="max-w-6xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-16"
    >
      {/* ABOUT + EDUCATION */}
      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-medium mb-4">About</h3>
          <p className="text-sm text-[#9AA1B2] leading-relaxed max-w-prose">
            I’m a frontend developer focused on building clean, responsive, and
            user-friendly interfaces. I enjoy transforming ideas into smooth,
            practical digital experiences.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Education</h3>

          <div className="space-y-6 text-sm">
            <div className="border-l border-[#1C2233] pl-4">
              <div className="font-medium">
                Softwarica College of IT & E-Commerce
              </div>
              <div className="text-[#9AA1B2] text-xs mt-1">
                BSc (Hons) Computing · 2022 — 2025
              </div>
            </div>

            <div className="border-l border-[#1C2233] pl-4">
              <div className="font-medium">
                Valmiki Shiksha Sadan College
              </div>
              <div className="text-[#9AA1B2] text-xs mt-1">
                Grade 12 · Science
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-medium mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full text-xs border border-[#1C2233] text-[#9AA1B2] hover:text-[#7C7CFF] hover:border-[#7C7CFF] transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">Soft Skills</h3>
          <ul className="space-y-3 text-sm text-[#9AA1B2]">
            {softSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#7C7CFF] text-xs" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsAbout;
