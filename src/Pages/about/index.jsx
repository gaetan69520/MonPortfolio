import React from "react";
import "./about.scss";

const AboutSection = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SQL",
    "Git",
    "Lighthouse",
    "Découpage de maquette",
    "Accessibilité",
    "Performance",
  ];

  return (
    <div className="about-section">
      <div className="presentation-section">
        <h2>Présentation</h2>
        <p>
          Depuis toujours, l'informatique m'intéresse. Après avoir exploré
          différents métiers sans satisfaction, j'ai saisi l'opportunité de me
          former en intégration web. Cette étape a posé les bases de mes
          compétences en informatique, cruciales pour mon ambition de me
          spécialiser dans la cybersécurité. La formation a été un tremplin pour
          mes connaissances. Elle a jeté les fondations de mon parcours, me
          permettant d'atteindre mon objectif : concevoir des expériences web
          uniques, tout en envisageant une spécialisation future en
          cybersécurité.
        </p>
        <p>
          Grâce à ma formation complète en intégration web sur OpenClassrooms,
          j'ai acquis une large gamme de compétences. J'ai maîtrisé les langages
          HTML, CSS, JavaScript et d'autres technologies essentielles pour créer
          des sites web modernes et performants. Durant cette formation, j'ai
          appris à coder, publier des pages web, améliorer les performances et
          le référencement, garantir l'accessibilité et travailler avec React.
          En parallèle, j'ai acquis la capacité à rendre les pages réactives, à
          créer des animations pour apporter un aspect dynamique et attrayant à
          mes réalisations. De plus, j'ai développé des compétences en tests
          préventifs pour des développements web plus fiables et robustes.
        </p>
        <a href="https://openclassrooms.com/fr/paths/594-integrateur-web">
          Découvrez ma formation sur OpenClassrooms
        </a>
      </div>

      <div className="skills-section">
        <h2>Compétences</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
