import React from "react";
import "./footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-section">
        <p>© {currentYear} Tous droits réservés.</p>
        <p>Gaëtan Lopez</p>
        <a href="mailto:roni69520@hotmail.com">roni69520@hotmail.com</a>
        <a href="https://github.com/gaetan69520">GitHub</a>
        <a href="https://www.linkedin.com/in/gaetan-lopez-694168260/">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Footer;
