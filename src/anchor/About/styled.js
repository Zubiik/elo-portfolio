import styled from "@emotion/styled";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageCircle = styled.img`
  height: 400px;
  width: 400px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;
export const AboutText = styled.p`
  width: 50%;
`;
export const AboutTitle = styled.h1`
  display: flex;
  justify-content: center;
`;
