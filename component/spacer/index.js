import styled, { css } from "styled-components";

export const Spacer = styled.div`
  ${({ xAxis, size }) =>
    xAxis
      ? css`
          width: ${size};
        `
      : css`
          height: ${size};
        `}
`;
