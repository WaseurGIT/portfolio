import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden transition-colors duration-300">
      {/* 1. Background Ambience (Very subtle glow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      {/* 2. Main Content */}
      <div className="z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Intro Tag */}
        <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-6 tracking-[0.2em] uppercase font-medium animate-fade-in-up">
          Hello,
        </p>

        {/* Name Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Waseur.
          </span>
        </h1>

        {/* Minimal Subtitle */}
        <p className="text-lg sm:text-2xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Creating digital experiences with clean code and thoughtful design.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link to="/projects">
            <button className="px-8 py-3.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold text-sm tracking-wide hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25">
              View Work
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-8 py-3.5 rounded-full border border-[var(--bg-secondary)] text-[var(--text-secondary)] font-medium text-sm tracking-wide hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-all duration-300">
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
