import styled from "@emotion/styled";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
  }
`;
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ProfilImg = styled.img`
  position: relative;
  width: 90%;
  max-width: 450px;
  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;
