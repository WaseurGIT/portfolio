import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
