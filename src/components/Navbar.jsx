import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState('beranda');

  const handleLinkClick = (link) => {
    setActiveLink(link); 
  };

  return (
    <nav className=" bg-DS-charcoal dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-16 py-5 md:px-9">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/image/logo-navbar.svg" className="h-8" alt="Dialog Sunyi Logo" />
        </a>
        <div className="flex items-center imd:order-2 space-x-3 imd:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white hover:outline font-medium rounded-lg text-sm px-4 py-2 text-center ">
            <img src="/icon/moon.svg" alt="light/dark mode toggle" />
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center text-center p-2 w-10 h-10 justify-center text-sm text-DS-beige rounded-lg imd:hidden hover:outline"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full imd:flex ${isOpen ? "imd:w-auto" : "imd:w-auto hidden"} imd:order-1`} id="navbar-sticky">
        <ul className="flex flex-col p-4 imd:p-0 mt-4 font-medium imd:space-x-8 rtl:space-x-reverse imd:flex-row imd:mt-0 imd:border-0">
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-DS-beige ${
                  activeLink === 'beranda' ? 'bg-DS-verdigris imd:bg-transparent imd:text-DS-verdigris imd:p-0' : 'hover:bg-DS-orangecarrot imd:hover:bg-transparent imd:hover:text-DS-orangecarrot imd:p-0'
                }`}
                onClick={() => handleLinkClick('beranda')}
                aria-current={activeLink === 'beranda' ? 'page' : undefined}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-DS-beige ${
                  activeLink === 'kelas' ? 'bg-DS-verdigris imd:bg-transparent imd:text-DS-verdigris imd:p-0' : 'hover:bg-DS-orangecarrot imd:hover:bg-transparent imd:hover:text-DS-orangecarrot imd:p-0'
                }`}
                onClick={() => handleLinkClick('kelas')}
                aria-current={activeLink === 'kelas' ? 'page' : undefined}
              >
                Kelas
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-DS-beige ${
                  activeLink === 'artikel' ? 'bg-DS-verdigris imd:bg-transparent imd:text-DS-verdigris imd:p-0' : 'hover:bg-DS-orangecarrot imd:hover:bg-transparent imd:hover:text-DS-orangecarrot imd:p-0'
                }`}
                onClick={() => handleLinkClick('artikel')}
                aria-current={activeLink === 'artikel' ? 'page' : undefined}
              >
                Artikel
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-DS-beige ${
                  activeLink === 'faq' ? 'bg-DS-verdigris imd:bg-transparent imd:text-DS-verdigris imd:p-0' : 'hover:bg-DS-orangecarrot imd:hover:bg-transparent imd:hover:text-DS-orangecarrot imd:p-0'
                }`}
                onClick={() => handleLinkClick('faq')}
                aria-current={activeLink === 'faq' ? 'page' : undefined}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-DS-beige ${
                  activeLink === 'tentang' ? 'bg-DS-verdigris imd:bg-transparent imd:text-DS-verdigris imd:p-0' : 'hover:bg-DS-orangecarrot imd:hover:bg-transparent imd:hover:text-DS-orangecarrot imd:p-0'
                }`}
                onClick={() => handleLinkClick('tentang')}
                aria-current={activeLink === 'tentang' ? 'page' : undefined}
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
