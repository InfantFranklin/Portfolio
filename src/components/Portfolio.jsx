import React, { useState } from "react";

const Portfolio = () => {
  const [expanded, setExpanded] = useState(null);

  const portfolios = [
    {
      id: 1,
      title: "AI Image Enhancement System",
      type: "Production · Internal Tool",
      stack: ["React.js", "Node.js", "Python", "PostgreSQL", "Redis", "Microservices"],
      summary:
        "An end-to-end AI-powered image editing platform built for production — taken from R&D through POC to a live internal product.",
      highlights: [
        "Led R&D on multiple AI image enhancement models, evaluating performance, quality, and cost efficiency",
        "Built a proof of concept (POC) to validate technical feasibility of AI-driven image workflows",
        "Architected a microservices system using Node.js and Python for image processing tasks",
        "Implemented image versioning and iterative editing capabilities for enhanced user control",
        "Reduced operational costs by 80% by replacing expensive third-party APIs with optimized in-house solutions",
        "Improved system reliability by 40%, reducing downtime through debugging and performance optimization",
        "Optimized data access using PostgreSQL for metadata storage and Redis for caching",
      ],
      impact: ["80% cost reduction", "40% less downtime", "R&D → POC → Production"],
      url: null,
    },
    {
      id: 2,
      title: "Role-Based User Management System",
      type: "Full Stack · Personal Project",
      stack: ["React.js", "Node.js", "MongoDB", "JWT", "Passport.js", "Tailwind CSS"],
      summary:
        "A full-stack application with secure authentication, role-based access control, and an intuitive admin dashboard.",
      highlights: [
        "Built complete full-stack architecture using React.js, Node.js, and MongoDB",
        "Implemented secure authentication and authorization using JWT and Passport.js",
        "Designed role-based access control (RBAC) supporting admin and standard user workflows",
        "Built a responsive, clean UI using Tailwind CSS for efficient user management",
      ],
      impact: ["JWT Auth", "RBAC System", "Full Stack"],
      url: "https://github.com/InfantFranklin",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-full flex flex-col justify-center bg-gradient-to-b from-black via-black to-gray-800 text-white p-4 scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full py-8">
        {/* Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-b-gray-500">
            Projects
          </p>
          <p className="py-6 text-gray-400">
            Things I've built — from internal production systems to personal
            full-stack projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {portfolios.map(
            ({ id, title, type, stack, summary, highlights, impact, url }) => (
              <div
                key={id}
                className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <span className="text-xs text-cyan-400 font-medium">
                      {type}
                    </span>
                  </div>
                  {/* Impact badges */}
                  <div className="flex flex-wrap gap-2">
                    {impact.map((badge, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-md bg-gray-800 border border-gray-600 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Highlights */}
                <button
                  onClick={() => setExpanded(expanded === id ? null : id)}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-3"
                >
                  {expanded === id ? "▲ Hide details" : "▼ Show details"}
                </button>

                {expanded === id && (
                  <ul className="space-y-2 mb-4">
                    {highlights.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-cyan-500 mt-1">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <div className="flex gap-4 mt-2">
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 duration-300"
                    >
                      View on GitHub →
                    </a>
                  )}
                  {!url && (
                    <span className="text-xs text-gray-500 italic px-1 py-2">
                      🔒 Internal product — not publicly available
                    </span>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;