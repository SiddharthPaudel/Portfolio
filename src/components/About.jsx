import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Education Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold">Education</h3>
        <div className="mt-3 text-sm text-gray-700 space-y-3">
          <div>
            <div className="font-medium">
              Softwarica College of IT & E-Commerce
            </div>
            <div className="text-xs text-gray-600">
              BSc (Hons) Computing — Expected Graduation: Dec 2025
            </div>
            <p className="text-xs mt-1 text-gray-500">
              Focused on software development, web technologies, and practical
              programming projects.
            </p>
          </div>

          <div>
            <div className="font-medium">Valmiki Shiksha Sadan College</div>
            <div className="text-xs text-gray-600">
              Grade 12 — Science Stream (B+)
            </div>
            <p className="text-xs mt-1 text-gray-500">
              Developed strong logical thinking and analytical skills.
            </p>
          </div>
        </div>
      </div>

      {/* About & Soft Skills Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold">About Me & Soft Skills</h3>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
          I’m a frontend developer who loves crafting clean, responsive, and
          user-friendly web interfaces. I enjoy learning new tools and
          collaborating in teams to turn ideas into reality. My goal is to
          create products that not only work well but also feel great to use.
        </p>

        <ul className="mt-4 text-sm text-gray-700 space-y-1">
          <li>• Strong communication & collaboration</li>
          <li>• Creative problem-solving mindset</li>
          <li>• Adaptability and eagerness to learn</li>
          <li>• Attention to detail</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
