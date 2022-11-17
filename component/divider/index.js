import styled, { css } from "styled-components";

export const Divider = styled.div`
  ${({ size = "1px", bgColor = "#000000" }) => css`
    height: ${size};
    background-color: ${bgColor};
  `}
`;
