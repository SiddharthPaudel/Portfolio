import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SkillsAbout = () => {
  const technicalSkills = [
    "JavaScript",
    "Node.js",
    "React",
    "Next.js",
    "SQL",
    "MongoDB",
    "Tailwind CSS",
    "REST API Development",
    "Express.js",
    "Agile Methodologies",
  ];

  const softSkills = [
    "Effective Communication",
    "Problem-solving",
    "Creativity & Adaptability",
    "Attention to Detail",
    "Presentation Skills",
  ];

  return (
    <section id="skills-about" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
      
      {/* Box 1: About + Education */}
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gradient-to-r from-purple-500 to-blue-500 inline-block pb-1">
            About Me
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            I’m a frontend developer passionate about creating clean, responsive, and user-friendly web interfaces. 
            I enjoy learning new tools, collaborating in teams, and building products that not only work but feel great to use.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gradient-to-r from-purple-500 to-blue-500 inline-block pb-1">
            Education
          </h3>
          <div className="text-sm text-gray-700 space-y-4">
            <div>
              <div className="font-semibold text-gray-800">Softwarica College of IT & E-Commerce</div>
              <div className="text-xs text-gray-600">BSc (Hons) Computing — Expected Graduation: Dec 2025</div>
              <p className="text-xs mt-1 text-gray-500">
                Focused on software development, web technologies, and practical programming projects.
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-800">Valmiki Shiksha Sadan College</div>
              <div className="text-xs text-gray-600">Grade 12 — Science Stream (B+)</div>
              <p className="text-xs mt-1 text-gray-500">
                Developed strong logical thinking and analytical skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Box 2: Technical Skills + Soft Skills */}
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gradient-to-r from-purple-500 to-blue-500 inline-block pb-1">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gradient-to-r from-purple-500 to-blue-500 inline-block pb-1">
            Soft Skills
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            {softSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <FaCheckCircle className="text-purple-500" /> {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
};

export default SkillsAbout;
