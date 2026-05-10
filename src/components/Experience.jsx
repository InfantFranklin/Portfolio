import React, { useMemo } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import vuejs from "../assets/vuejs.png";
import mongodb from "../assets/mongodb.png";
import typescript from "../assets/typescript.png";
import docker from "../assets/docker.svg";
import node from "../assets/node.png";

const Experience = () => {
  const categories = useMemo(
    () => [
      {
        label: "Frontend",
        techs: [
          { title: "React.js", src: reactImage, style: "shadow-blue-600" },
          { title: "TypeScript", src: typescript, style: "shadow-cyan-400" },
          { title: "JavaScript", src: javascript, style: "shadow-yellow-500" },
          { title: "Vue.js", src: vuejs, style: "shadow-green-400" },
          { title: "Tailwind CSS", src: tailwind, style: "shadow-sky-400" },
          { title: "HTML", src: html, style: "shadow-orange-500" },
          { title: "CSS", src: css, style: "shadow-blue-500" },
        ],
      },
      {
        label: "Backend & Database",
        techs: [
          { title: "Node.js", src: node, style: "shadow-green-600" },
          {
            title: "Python",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            style: "shadow-yellow-400",
          },
          {
            title: "PostgreSQL",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            style: "shadow-blue-400",
          },
          { title: "MongoDB", src: mongodb, style: "shadow-green-500" },
          {
            title: "Redis",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            style: "shadow-red-500",
          },
          {
            title: "MySQL",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            style: "shadow-orange-400",
          },
          {
            title: "Prisma",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
            style: "shadow-white",
          },
        ],
      },
      {
        label: "DevOps & Tools",
        techs: [
          {
            title: "AWS",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
            style: "shadow-yellow-500",
          },
          { title: "Docker", src: docker, style: "shadow-cyan-400" },
          {
            title: "Git",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            style: "shadow-orange-500",
          },
          { title: "GitHub", src: github, style: "shadow-gray-300" },
          {
            title: "Postman",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
            style: "shadow-orange-400",
          },
        ],
      },
      {
        label: "State & Concepts",
        techs: [
          {
            title: "Redux Toolkit",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            style: "shadow-purple-500",
          },
          {
            title: "REST APIs",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
            style: "shadow-green-400",
          },
          {
            title: "Microservices",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            style: "shadow-green-600",
          },
          {
            title: "JWT Auth",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
            style: "shadow-yellow-300",
          },
        ],
      },
      {
        label: "AI-Assisted Development",
        techs: [
          {
            title: "Claude Code",
            src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg",
            style: "shadow-orange-400",
            invert: true,
          },
          {
            title: "Cursor IDE",
            src: "https://cursor.sh/brand/icon.svg",
            style: "shadow-purple-400",
            invert: false,
          },
          {
            title: "Prompt Eng.",
            src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
            style: "shadow-green-300",
            invert: true,
          },
        ],
      },
    ],
    [],
  );

  return (
    <div
      name="experience"
      className="flex flex-col justify-center bg-gradient-to-b from-gray-800 to-black w-full scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white py-8">
        {/* Header */}
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-b-gray-500">
            Skills & Technologies
          </p>
          <p className="py-6 text-gray-400">
            Technologies I've worked with across frontend, backend, and
            infrastructure.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4 border-l-2 border-cyan-400 pl-3">
              {category.label}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center">
              {category.techs.map(
                ({ title, src, style, invert = false }, i) => (
                  <div
                    key={i}
                    className={`shadow-md hover:scale-105 duration-300 py-4 px-2 rounded-xl bg-gray-900 border border-gray-700 hover:border-cyan-500 ${style}`}
                  >
                    <img
                      src={src}
                      alt={title}
                      className="w-12 mx-auto"
                      style={{ filter: invert ? "invert(1)" : "none" }}
                      loading="lazy"
                    />
                    <p className="mt-3 text-sm text-gray-300">{title}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
