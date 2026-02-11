import React from "react";

const Project = ({ project }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-[var(--bg-secondary)] rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-1">
      {/* Left: Image */}
      <div className="flex-shrink-0 relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full sm:w-48 h-32 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-l-xl"></div>
      </div>

      {/* Right: Info */}
      <div className="flex-1 py-3 px-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-[var(--text-primary)]">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.stacks.map((stack, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs sm:text-sm rounded-full bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-sm"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <a
            href={project.buttons.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.buttons.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 border border-blue-500 text-blue-500 text-sm rounded-lg hover:bg-blue-500 hover:text-white shadow-md hover:scale-105 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
