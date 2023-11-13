import styled from "@emotion/styled";

export const Container = styled.p`
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
export const CustomButton = styled.button`
  border: 1px solid transparent;
  cursor: pointer;
  ::hover {
    color: #555;
  }
`;
