import styled from "@emotion/styled";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  align-items: center;
  gap: 2.5rem;
  @media (min-width: 1024px) {
  }
  border: blue 1px solid;
  padding: 1rem;
  border-radius: 8px;
`;
export const SkillCard = styled.article`
  border: pink 2px solid;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  padding: 1.5rem;
`;
export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const InfoTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
`;
export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
