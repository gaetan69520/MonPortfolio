import React from "react";
import "./home.scss";
import web from "../../public/images/web.webp";

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <div className="content">
        <div className="content-home">
          <section>
            <h2>A propos</h2>
            <p>
              Ici, vous pourrez découvrir mes compétences ainsi qu'un bref
              résumé de ma formation et de ma personne.
            </p>
          </section>
          <section>
            <h2>Projets</h2>
            <p>
              Ici, je vais vous présenter deux projets que j'ai réalisés et vous
              expliquer mon implication dans ceux-ci.
            </p>
          </section>
          <section>
            <h2>Formulaire</h2>
            <p>
              Ici vous pouvez me contacter en laissant votre e-mail, votre nom
              et un message.
            </p>
          </section>
        </div>
        <div className="image-container">
          <img src={web} alt="Portfolio Preview" />
          <div className="text-overlay">
            <h1>Bonjour</h1>
            <h2>Gaëtan Lopez</h2>
            <h3>Intégrateur Web</h3>
            <p>Bienvenue sur mon portfolio!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
