import styled, { keyframes } from "styled-components";

const loaderKeyframe = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #282a3a;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${loaderKeyframe} 1s linear infinite;
`;
