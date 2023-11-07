import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./header.scss";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <h1>GL</h1>
      </Link>
      <div className="header-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Acceuil
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          A Propos
        </Link>
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          Projets
        </Link>
        <Link
          to="/formulaire"
          className={location.pathname === "/formulaire" ? "active" : ""}
        >
          Formulaire
        </Link>
      </div>
    </div>
  );
};

export default Header;
