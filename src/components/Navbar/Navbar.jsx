import { useContext } from "react";
import { GrProjects } from "react-icons/gr";
import { IoIosContact, IoMdSunny } from "react-icons/io";
import { IoMailOpenOutline, IoMoon } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeProvider";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const links = [
    { path: "/", label: "Home", icon: <TiHomeOutline className="text-2xl" /> },
    {
      path: "/about",
      label: "About Me",
      icon: <IoIosContact className="text-2xl" />,
    },
    {
      path: "/projects",
      label: "Projects",
      icon: <GrProjects className="text-2xl" />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <IoMailOpenOutline className="text-2xl" />,
    },
  ];

  return (
    <div className="bg-[var(--bg-navbar)] py-3 w-full max-w-[500px] fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full shadow-lg z-20 px-4 sm:px-6">
      <div className="flex items-center justify-around">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
        </Link>

        {/* Links */}
        <div className="flex items-center justify-center gap-10 sm:gap-8 flex-1 mx-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative flex flex-col items-center justify-center transition-all duration-300 text-[var(--text-primary)] hover:text-orange-400 group"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex-shrink-0 relative transition-transform duration-300 hover:scale-110 active:scale-95 group"
        >
          {theme === "dark-theme" ? (
            <IoMdSunny className="text-2xl text-[var(--text-primary)] cursor-pointer" />
          ) : (
            <IoMoon className="text-2xl text-[var(--text-primary)] cursor-pointer" />
          )}
          <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {theme === "dark-theme" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
