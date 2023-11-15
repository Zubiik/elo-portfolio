import styled from "@emotion/styled";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
    width: 90%;
    display: flex;
    flex-direction: row;
  }
`;

export const ImageCircle = styled.img`
  height: 300px;
  width: 300px;
  background-color: #bbb;
  border-radius: 50%;
  align-self: center;
  display: inline-block;
  @media (min-width: 1024px) {
    height: 400px;
    width: 400px;
    margin: 2rem;
  }
`;
export const AboutText = styled.p`
  width: 80%;
  margin: 2rem;
  padding: 0.5rem 0;
  line-height: 1.8;
  font-weight: 300;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;
export const AboutTitle = styled.h1`
  display: flex;
  align-self: flex-start;
  margin: 2rem;
  @media (min-width: 1024px) {
    align-self: center;
  }
`;
