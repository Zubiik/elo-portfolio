import styled from "@emotion/styled";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const ProfilImg = styled.img`
  position: relative;
  width: 90%;
  max-width: 450px;
  @media (min-width: 1024px) {
    max-width: 100%;
  }
`;
