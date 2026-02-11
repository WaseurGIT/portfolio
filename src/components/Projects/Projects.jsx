import React, { useState, useEffect } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="min-h-screen px-4 sm:px-20 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Header Section */}
      <div className="mb-12 text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            My Projects
          </span>
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto lg:mx-0 shadow-md"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
