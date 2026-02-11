const AboutMe = () => {
  const skills = [
    "JavaScript",
    "React",
    "TailwindCSS",
    "Python",
    "Java",
    "MongoDB",
    "Github",
    "Node",
    "Express",
    "Firebase",
  ];

  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "5" },
    // { label: "Companies Worked", value: "2" },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-12 py-16 relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-lg text-blue-500 font-semibold tracking-wide uppercase mb-2">
            Who I am
          </h2>
          <h1 className="text-2xl sm:text-4xl font-bold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Me
            </span>
          </h1>
          <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto lg:mx-0"></div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Section */}
          <div className="flex-1 w-full">
            <h3 className="text-2xl font-semibold mb-4">
              I'm Md. Waseur Rahman
            </h3>

            <p className="text-[var(--text-secondary)] text-base sm:text-lg mb-8 leading-relaxed opacity-90">
              I am a passionate developer with experience in web and app
              development. I enjoy creating responsive, user-friendly interfaces
              and strictly focus on writing clean, maintainable code. My journey
              involves constantly learning new technologies to solve real-world
              problems.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 border-y border-[var(--bg-secondary)] py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-semibold text-xl mb-4 flex items-center gap-2">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section*/}
          <div className="flex-1 flex justify-center lg:justify-end relative group">
            <div className="relative w-64 sm:w-80 md:w-96 aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
              <img
                src="https://i.ibb.co.com/9mLHCN1r/image.png"
                alt="Waseur Rahman"
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-[var(--bg-primary)] z-10 transition-transform duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute -bottom-6 -left-6 z-20 bg-[var(--bg-primary)] px-4 py-2 rounded-xl shadow-xl border border-[var(--bg-secondary)] flex items-center gap-3 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Status</p>
                  <p className="text-sm font-bold">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
