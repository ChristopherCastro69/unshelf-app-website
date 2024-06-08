import React, { useState } from "react";
// import { IonIcon } from "@ionic/react";
// import { menu, close } from "ionicons/icons";
import "./Header.css"; // Add your CSS for Header here
// import logo from './.././../images/'
import logo from "./../../assets/logo.png";

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="Pod logo" />
        </a>

        <nav className={`navbar ${navbarActive ? "active" : ""}`} data-navbar>
          <button
            className="nav-close-btn"
            data-nav-close-btn
            onClick={toggleNavbar}
          >
            {/* <IonIcon icon={close} /> */}
          </button>

          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="navbar-link">
                Features
              </a>
            </li>
            <li>
              <a href="#overview" className="navbar-link">
                Overview
              </a>
            </li>

            <li>
              <a href="#overview">
                <button className="btn-primary">Get started</button>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav-open-btn"
          data-nav-open-btn
          onClick={toggleNavbar}
        >
          {/* <IonIcon icon={menu} /> */}
        </button>
      </div>
    </header>
  );
};

export default Header;
