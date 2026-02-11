import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import ThemeProvider from "./components/Theme/ThemeProvider.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Root from "./components/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        element: (
          <div className="min-h-screen flex items-center justify-center text-2xl">
            Projects Page - Coming Soon!
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
