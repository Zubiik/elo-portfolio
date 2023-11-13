import React from "react";
import { HeaderContainer, Title, SubTitle, ButtonToLoad } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Title> Elodie Frappat</Title>
        <SubTitle>Développeuse Web fullstack</SubTitle>
        <ButtonToLoad>Mon cv</ButtonToLoad>
      </div>
    </HeaderContainer>
  );
};

export default Header;
