import styled from "styled-components";

export const StyledNewsContainer = styled.div``;

export const NewsSection = styled.section`
  padding: 0 2em;
  h2 {
    margin: 0.5em 0;
  }
  @media (max-width: 800px) {
    padding: 0 1em;
  }
`;

export const PublishedDate = styled.p`
  margin: 0.3em;
  font-style: italic;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 800px) {
    text-align: right;
    margin: 0;
  }
`;

export const CommentSection = styled.section``;
