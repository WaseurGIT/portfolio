import { useContext } from "react";
import { GrProjects } from "react-icons/gr";
import { IoIosContact, IoMdSunny } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeProvider";

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
    <div className="bg-[var(--bg-navbar)] py-2 w-full max-w-[450px] fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full shadow-lg z-20 px-4 sm:px-0">
      <div>
        {/* logo */}
        <div></div>
        {/* links */}
        <div className="flex items-center justify-between sm:justify-center gap-6 sm:gap-14">
          {links.map((link) => (
            <ul key={link.path}>
              <Link
                to={link.path}
                className="transition duration-300 relative flex flex-col items-center justify-center text-sm text-orange-400 hover:text-orange-600 group"
              >
                {link.icon}
                <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {link.label}
                </span>
              </Link>
            </ul>
          ))}
          <button onClick={toggleTheme} className="relative group">
            {theme === "dark-theme" ? (
              <IoMdSunny className="text-2xl text-[var(--text-primary)] cursor-pointer" />
            ) : (
              <WiMoonAltThirdQuarter className="text-2xl text-[var(--text-primary)] cursor-pointer" />
            )}
            <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {theme === "dark-theme" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
