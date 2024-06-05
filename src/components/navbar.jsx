import React from "react";
import "../styles/navbarStyle.css";
import "../styles/main.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <a href="#" className="logo">
        <img src="/image/logo-navbar.svg" alt="logo dialog sunyi" width={300}></img>
      </a>
      <nav ref={navRef}>
        <ul>
          <li>
            <a href="">Beranda</a>
          </li>
          <li>
            <a href="">Kelas</a>
          </li>
          <li>
            <a href="">Artikel</a>
          </li>
          <li>
            <a href="">VISYARA</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Tentang Kami</a>
          </li>
          <li>
            <button className="nav__toggle nav__dark-mode-btn">
              <img src="/icon/moon.svg" alt="light/dark mode toggle" className="dark-mode__img" />
            </button>

            <button className="nav__toggle nav__light-mode-btn">
              <img src="/icon/sun.svg" alt="light/dark mode toggle" className="light-mode__img" />
            </button>
          </li>
        </ul>
          
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
