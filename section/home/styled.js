import styled from "styled-components";

export const HomeContainer = styled.div`
  display: block;
`;

export const PublishedDate = styled.p`
  margin: 0.3em;
  font-style: italic;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
`;

export const StyledCard = styled.div`
  margin: 0.6em 10.5em;
  padding: 0.8em;
  min-height: 50px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 6px;
  cursor: pointer;
  span {
    font-weight: 600;
    color: #282a3a;
  }
  @media (max-width: 800px) {
    margin: 0.6em 0.5em;
  }
`;
export const FillerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 116px);
  flex-direction: column;
  h2 {
    text-align: center;
  }
`;
