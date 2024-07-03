/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [visitCounts, setVisitCounts] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { name: "Beranda", path: "/" },
    { name: "Kelas", path: "/kelas" },
    { name: "Artikel", path: "/artikel" },
    { name: "FAQ", path: "/faq" },
    { name: "Tentang Kami", path: "/tentang-kami" }
  ];

  useEffect(() => {
    // Initialize visit counts from localStorage
    const storedCounts = JSON.parse(localStorage.getItem("visitCounts")) || {};
    setVisitCounts(storedCounts);
    // console.log("Initial visit counts:", storedCounts); // Log initial visit counts
  }, []);

  useEffect(() => {
    // console.log("Updated visit counts:", visitCounts); // Log visit counts whenever it updates
  }, [visitCounts]);

  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#1B2831";
      if (themeToggleLightIcon) themeToggleLightIcon.classList.remove("hidden");
      if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "";
      if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove("hidden");
      if (themeToggleLightIcon) themeToggleLightIcon.classList.add("hidden");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("color-theme", !isDarkMode ? "dark" : "light");
  };

  const handleLinkClick = (page) => {
    const newVisitCounts = { ...visitCounts, [page.path]: (visitCounts[page.path] || 0) + 1 };
    setVisitCounts(newVisitCounts);
    localStorage.setItem("visitCounts", JSON.stringify(newVisitCounts));
    console.log("Visit counts after clicking:", newVisitCounts); // Log visit counts after clicking
    navigate(page.path);
  };

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `block py-2 px-3 transition duration-100 ease-in-out ${isActive ? "text-DS-verdigris border-b-2 border-DS-verdigris" : "text-DS-beige"} ${isActive ? "" : "hover:text-DS-orangecarrot"}`;
  };

  // Sort pages based on visit counts
  const sortedPages = [...pages].sort((a, b) => (visitCounts[b.path] || 0) - (visitCounts[a.path] || 0));

  return (
    <nav className="bg-DS-charcoal fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-16 py-5 md:px-9 2sm:px-5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/image/logo-navbar.svg" className="h-8" alt="Dialog Sunyi Logo" />
        </a>
        <div className="flex items-center ilg:order-2 space-x-3 ilg:space-x-0 rtl:space-x-reverse">
          <button
            id="theme-toggle"
            type="button"
            className="text-white hover:outline font-medium rounded-lg text-sm px-4 py-2 text-center 2sm:px-1 max-[400px]:px-1 max-[400px]:py-1"
            onClick={toggleTheme}
          >
            <img
              src={isDarkMode ? "/icon/sun.svg" : "/icon/moon.svg"}
              alt="light/dark mode toggle"
              className="2sm:w-5 2sm:h-5"
            />
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center text-center p-2 w-10 h-10 justify-center text-sm text-DS-beige rounded-lg ilg:hidden hover:outline max-[400px]:w-8 max-[400px]:h-8"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 2sm:w-4 2sm:h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full ilg:flex ${isOpen ? "ilg:w-auto" : "ilg:w-auto hidden"} ilg:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 ilg:p-0 mt-4 font-medium ilg:space-x-8 rtl:space-x-reverse ilg:flex-row ilg:mt-0 ilg:border-0">
            {sortedPages.map((page) => (
              <li key={page.path}>
                <a href={page.path} className={getLinkClass(page.path)} onClick={() => handleLinkClick(page)} aria-current={location.pathname === page.path ? "page" : undefined}>
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
