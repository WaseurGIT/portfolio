import React, { useState, useEffect } from "react";
import Project from "./Project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#project_header",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
    );
    gsap.fromTo(
      "#projects",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.2,
      },
    );
  }, []);

  return (
    <div className="min-h-screen px-4 sm:px-20 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 mb-12">
      {/* Header Section */}
      <div id="project_header" className="mb-12 text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            My Projects
          </span>
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto lg:mx-0 shadow-md"></div>
      </div>

      {/* Projects Grid */}
      <div id="projects" className="flex flex-col lg:flex-row gap-6 lg:gap-0">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          {projects.slice(0, Math.ceil(projects.length / 2)).map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>

        <div className="hidden lg:flex lg:items-stretch lg:px-6 lg:py-4">
          <div className="w-px bg-gradient-to-b from-transparent via-[var(--text-primary)] to-transparent opacity-30"></div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6">
          {projects.slice(Math.ceil(projects.length / 2)).map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
