import React from "react";
import "./projects.scss";

import Nina from "../../public/images/nina.webp";
import ohmyfood from "../../public/images/ohmyfood.webp";
import kasa from "../../public/images/kasa.webp";

const ProjectsSection = () => {
  return (
    <div className="project-section">
      <h1>Projets</h1>

      <div className="project">
        <div className="project-info">
          <h2>Premier projet Nina</h2>
          <p>
            Le projet 'Nina' a représenté un grand changement pour moi. Il m'as
            amené à ne pas seulement coder, mais à également améliorer des
            aspects cruciaux tels que le référencement (SEO), les performances
            et l'accessibilité du site. Ces éléments sont aussi importants que
            la qualité du code pour accroître la visibilité du site et son
            classement sur Google, attirant ainsi plus de visiteurs. Adapter le
            site pour répondre aux besoins des personnes était également un
            aspect important. Ce projet a été particulièrement enrichissant,
            m'offrant une expérience différente de ce à quoi j'étais habitué
            durant ma formation. J'y ai appris énormément.
          </p>
          <a href="https://github.com/gaetan69520/nina">
            Lien du référentiel sur GitHub
          </a>
        </div>
        <img src={Nina} alt="Nina Projet" />
      </div>

      <div className="project">
        <div className="project-info">
          <h2>Deuxieme Projet oh-my-food</h2>
          <p>
            Le projet 'Oh-my-food' a été particulièrement captivant pour moi.
            J'ai pu mettre en pratique toutes les compétences acquises depuis le
            début de ma formation en HTML et CSS, tout en intégrant des
            animations pour donner vie au site. L'une des étapes clés fut
            d'aborder la conception du site en version mobile, puis de l'adapter
            progressivement pour les écrans de bureau (desktop). Ce projet m'a
            permis de prendre en main SASS, enrichissant ainsi mon expérience
            tout en rendant le site responsive. C'était une expérience
            enrichissante où j'ai concrètement appliqué mes connaissances dans
            la réalisation d'un projet complet.
          </p>
          <a href="https://github.com/gaetan69520/oh-my-food">
            Lien du référentiel sur GitHub
          </a>
        </div>
        <img src={ohmyfood} alt="Oh-my-food Projet" />
      </div>

      <div className="project">
        <div className="project-info">
          <h2>Troisieme Projet Kasa</h2>
          <p>
            Le projet 'Kasa' a été une grande réalisation sur React, une
            technologie que je ne maîtrisais pas auparavant. J'ai pu créer
            plusieurs pages et leurs itinéraires, tout en utilisant du Sass pour
            styliser chaque page. J'ai conçu différents composants et les ai
            intégrés sur leurs pages respectives. Ce projet a nécessité de la
            réflexion et de l'organisation, impliquant l'ajout d'animations et
            la mise en place d'une conception responsive pour s'adapter à
            différents appareils.
          </p>
          <a href="https://github.com/gaetan69520/kasa">
            Lien du référentiel sur GitHub
          </a>
        </div>
        <img src={kasa} alt="Kasa Projet" />
      </div>
    </div>
  );
};

export default ProjectsSection;
