import React, { useState } from "react";
import "../css/header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleLink, setToggleLink] = useState("");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const clickItem = (param) => {
    setToggleLink(param);
    setToggleMenu(false);
  };
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#section" className="nav__logo">
          <i className="ri-steering-line"></i>
          Elecar
        </a>

        <div
          className={`nav__menu ${toggleMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item" onClick={() => clickItem("Home")}>
              <a
                href="#home"
                className={`nav__link ${
                  toggleLink === "Home" ? "active-link" : ""
                } `}
              >
                Home
              </a>
            </li>
            <li className="nav__item" onClick={() => clickItem("About")}>
              <a
                href="#about"
                className={`nav__link ${
                  toggleLink === "About" ? "active-link" : ""
                } `}
              >
                About
              </a>
            </li>
            <li className="nav__item" onClick={() => clickItem("Popular")}>
              <a
                href="#popular"
                className={`nav__link ${
                  toggleLink === "Popular" ? "active-link" : ""
                } `}
              >
                Popular
              </a>
            </li>
            <li className="nav__item" onClick={() => clickItem("Feature")}>
              <a
                href="#features"
                className={`nav__link ${
                  toggleLink === "Feature" ? "active-link" : ""
                } `}
              >
                Feature
              </a>
            </li>
          </ul>
          <div className="nav__close" onClick={toggleNav} id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__toggle" onClick={toggleNav} id="nav-toggle">
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
