/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link, path) => {
    navigate(path);
  };

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `block py-2 px-3 transition duration-100 ease-in-out ${
      isActive ? 'text-DS-verdigris border-b-2 border-DS-verdigris' : 'text-DS-beige'
    } ${isActive ? '' : 'hover:text-DS-orangecarrot'}`;
  };

  return (
    <nav className="bg-DS-charcoal dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-16 py-5 md:px-9 2sm:px-5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/image/logo-navbar.svg" className="h-8" alt="Dialog Sunyi Logo" />
        </a>
        <div className="flex items-center ilg:order-2 space-x-3 ilg:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white hover:outline font-medium rounded-lg text-sm px-4 py-2 text-center 2sm:px-1 max-[400px]:px-1 max-[400px]:py-1"
          >
            <img
              src="/icon/moon.svg"
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
            <svg
              className="w-5 h-5 2sm:w-4 2sm:h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full ilg:flex ${isOpen ? "ilg:w-auto" : "ilg:w-auto hidden"} ilg:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 ilg:p-0 mt-4 font-medium ilg:space-x-8 rtl:space-x-reverse ilg:flex-row ilg:mt-0 ilg:border-0">
            <li>
              <a
                href="/"
                className={getLinkClass('/')}
                onClick={() => handleLinkClick('beranda', '/')}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="/kelas"
                className={getLinkClass('/kelas')}
                onClick={() => handleLinkClick('kelas', '/kelas')}
                aria-current={location.pathname === '/kelas' ? 'page' : undefined}
              >
                Kelas
              </a>
            </li>
            <li>
              <a
                href="/artikel"
                className={getLinkClass('/artikel')}
                onClick={() => handleLinkClick('artikel', '/artikel')}
                aria-current={location.pathname === '/artikel' ? 'page' : undefined}
              >
                Artikel
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className={getLinkClass('/faq')}
                onClick={() => handleLinkClick('faq', '/faq')}
                aria-current={location.pathname === '/faq' ? 'page' : undefined}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/tentang-kami"
                className={getLinkClass('/tentang-kami')}
                onClick={() => handleLinkClick('tentang', '/tentang-kami')}
                aria-current={location.pathname === '/tentang-kami' ? 'page' : undefined}
              >
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
