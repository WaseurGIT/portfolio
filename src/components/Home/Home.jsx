import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { ThemeContext } from "../Theme/ThemeProvider";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
