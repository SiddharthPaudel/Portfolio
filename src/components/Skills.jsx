import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Programming & Development",
      list: [
        "JavaScript",
        "Node.js",
        "React",
        "SQL",
        "MongoDB",
        "REST API Development",
      ],
    },
    {
      category: "Frontend Technologies",
      list: ["React.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      category: "Backend & Database Management",
      list: ["Express.js", "MongoDB", "SQL", "API Development"],
    },
    {
      category: "Software Development Practices",
      list: ["Agile Methodologies", "Sprint-based Teamwork"],
    },
    {
      category: "Other Technical Skills",
      list: [
        "API Security (JWT Authentication, Role-based Authorization)",
        "Microservices (basic)",
      ],
    },
    {
      category: "Soft Skills",
      list: [
        "Effective Communication",
        "Team Collaboration",
        "Problem-solving",
        "Presentation Skills",
        "Fluent in English",
      ],
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((s) => (
          <div
            key={s.category}
            className="group bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-3 border-l-4 border-primary pl-3">
              {s.category}
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
              {s.list.map((item) => (
                <li
                  key={item}
                  className="flex items-start transition-all duration-200 group-hover:text-gray-900"
                >
                  <span className="text-primary mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Decorative divider */}
      <div className="mt-12 w-24 h-1 bg-primary mx-auto rounded-full opacity-70"></div>
    </section>
  );
};

export default Skills;
