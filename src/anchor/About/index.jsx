import React from "react";
import { ImageCircle, AboutContainer, AboutText } from "./styled";

const About = () => {
  return (
    <>
      <h1> A propos</h1>
      <AboutContainer>
        <AboutText>
          J'ai débuté dans le développement web en autodidacte, poussée par ma
          curiosité envers le monde numérique. En parallèle, j'ai entrepris des
          projets personnels tout en suivant des cours en ligne pour développer
          de nouvelles compétences. En tant que Développeuse web front-end
          junior, j'ai fait le choix de me spécialiser dans React.JS, car
          j'apprécie énormément sa flexibilité et sa capacité à créer des
          interfaces utilisateur dynamiques et interactives.
        </AboutText>
        <ImageCircle src="../../code.jpeg" alt="code lines" />
      </AboutContainer>
    </>
  );
};

export default About;
