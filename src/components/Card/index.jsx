import React from "react";
import { Title, Infos, CardContainer, ProjectImg } from "./styled";

const Card = () => {
  return (
    <CardContainer>
      <ProjectImg src="../../images/code.jpeg" />
      <Title>Projets</Title>
      <Infos>infos</Infos>
    </CardContainer>
  );
};

export default Card;
