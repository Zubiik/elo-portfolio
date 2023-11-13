import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  width: 100%;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  position: sticky;
  top: 0px;
  background-color: white;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;
export const CustomButton = styled.button`
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
export const HomeButton = styled.button`
  display: flex;
  align-self: center;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
