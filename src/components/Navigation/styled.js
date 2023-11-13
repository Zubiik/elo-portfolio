import styled from '@emotion/styled'

export const Test = styled.p`
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }`;