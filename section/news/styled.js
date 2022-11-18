import styled from "styled-components";

export const StyledNewsContainer = styled.div``;

export const NewsSection = styled.section`
  padding: 0 2em;
  h1 {
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

export const CommentSection = styled.section`
  padding: 0 2em;
  @media (max-width: 800px) {
    padding: 0 1em;
  }
`;

export const CommentCard = styled.div`
  margin: 1em 0;
  p {
    margin: 0;
  }
`;

export const ComponentCardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentText = styled.p`
  overflow: hidden;
  font-size: 14px;
  color: #00000080;
`;

export const CommentDate = styled.span`
  font-size: 12px;
  font-style: italic;
  position: absolute;
  right: 0;
  margin-right: 2em;
`;

export const NoCommentAvailable = styled.p`
  font-style: italic;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  flex-direction: column;
`;
