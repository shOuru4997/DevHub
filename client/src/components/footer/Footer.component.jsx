import React from "react";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer id="footer">
      <h1>
        Made with love by <span>Sourav</span> & <span>Vignesh</span>
      </h1>
      <div className="socialIcons">
        <a href="https://www.instagram.com/souravkumar4997/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/SouravK45377330">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/sourav-kumar-2a3647140/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/shouru4997">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
