import React, { memo } from "react";

const About = memo(() => {
  const highlights = [
    {
      title: "Frontend Excellence",
      description:
        "5 years crafting high-performance React.js applications with TypeScript. Experienced in Redux Toolkit, Context API, Tailwind CSS, and converting Figma designs into pixel-perfect, responsive UIs with lazy loading, memoization, and code splitting.",
    },
    {
      title: "Backend & Systems",
      description:
        "Architected and built production-ready microservices using Node.js, Express.js, and Python. Experienced in REST API design, JWT authentication, PostgreSQL, MongoDB, Redis caching, and cloud infrastructure with AWS and Docker.",
    },
    {
      title: "AI-Powered Development",
      description:
        "Led R&D, POC, and production rollout of an AI image enhancement system — reducing operational costs by 80%. Actively use AI-assisted tools like Cursor IDE, Claude Code, and prompt engineering in daily development workflows.",
    },
    {
      title: "Impact & Leadership",
      description:
        "Recognized 6 times across Synergy Awards including 'Inspiring Role Model' and 'ELEVATE' for the core value of 'We Before Me'. Contributed to 40% reduction in system downtime and 25% improvement in API response times.",
    },
  ];

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full py-4">
        {/* Header */}
        <div className="pb-6">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500">
            About Me
          </p>
        </div>

        {/* Intro */}
        <div className="mb-8 space-y-3">
          <p className="text-sm sm:text-xl text-gray-300 leading-relaxed">
            I'm{" "}
            <span className="text-white font-semibold">Infant Franklin</span>, a
            Full Stack Developer based in Chennai with 5 years of professional
            experience. I build end-to-end web applications — from responsive,
            accessible frontends to robust backend systems and cloud
            deployments.
          </p>
          <p className="text-sm sm:text-xl text-gray-300 leading-relaxed">
            My work spans the full product lifecycle: from early-stage{" "}
            <span className="text-cyan-400 font-medium">
              R&D and proof-of-concept
            </span>{" "}
            to{" "}
            <span className="text-cyan-400 font-medium">
              production-grade systems
            </span>{" "}
            used by real users. I care deeply about clean architecture,
            performance optimization, and writing code that's built to last.
          </p>
          <p className="text-sm sm:text-xl text-gray-300 leading-relaxed">
            Beyond the code, I'm passionate about AI integration in modern
            development — actively working with tools like Cursor IDE, Claude
            Code, and prompt engineering to accelerate delivery without
            compromising quality.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <h3 className="text-base font-bold text-cyan-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Currently */}
        <div className="mt-6 p-4 sm:p-6 bg-gray-900 border border-gray-700 rounded-xl">
          <p className="text-gray-400 text-xs sm:text-sm">
            <span className="text-white font-semibold">Currently:</span>{" "}
            Software Development Engineer at{" "}
            <span className="text-cyan-400 font-medium">
              ELB Learning India Pvt. Ltd.
            </span>
            , building AI-powered products and scalable frontend systems. Open
            to exciting opportunities where I can contribute to impactful,
            high-quality software.
          </p>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
