import React from "react";
import { Container, CustomButton } from "./styled";

const Navigation = () => {
  return (
    <Container>
      <CustomButton>
        <a href="home">Home</a>
      </CustomButton>
      <CustomButton>
        <a href="career">A propos</a>
      </CustomButton>
      <CustomButton>
        <a href="skills">Mon parcours</a>
      </CustomButton>
      <CustomButton>
        <a href="skills">Compétences</a>
      </CustomButton>
      <CustomButton>
        <a href="project">Projets</a>
      </CustomButton>
      <CustomButton>
        <a href="contact">Contact</a>
      </CustomButton>
    </Container>
  );
};

export default Navigation;
