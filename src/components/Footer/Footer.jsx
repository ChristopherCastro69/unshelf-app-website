import React from "react";
import { IonIcon } from "@ionic/react";
import {
  logoInstagram,
  logoFacebook,
  logoTwitter,
  logoLinkedin,
  logoGithub,
  logoWebComponent,
  logoVercel,
} from "ionicons/icons";
import logo from "./../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="Pod logo" />
        </a>
        <ul className="footer-list">
          <li>
            <a href="#" className="footer-link">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Terms & conditions
            </a>
          </li>
        </ul>
        <ul className="social-list">
          <li>
            <a
              href="https://www.linkedin.com/in/christopher-c-083561124"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IonIcon icon={logoLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/topitops05?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IonIcon icon={logoFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ChristopherCastro69"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IonIcon icon={logoGithub} />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/ChristopherCastro69"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IonIcon icon={logoVercel} />
            </a>
          </li>
        </ul>
        <p className="copyright">
          &copy; 2024 Christopher Castro. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
