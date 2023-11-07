import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import FormulaireSection from "./Pages/formulaire";
import ProjectsSection from "./Pages/projects";
import AboutSection from "./Pages/about";
import Footer from "./component/footer";
import PortfolioSection from "./Pages/home";
import "./index.sass";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="rooter-container">
        <div className="test">
          <Header />
          <Routes>
            <Route path="/" element={<PortfolioSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/formulaire" element={<FormulaireSection />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
