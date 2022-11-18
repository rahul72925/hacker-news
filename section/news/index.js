import React from "react";
import { Header, Spacer } from "../../component";
import {
  CommentCard,
  CommentDate,
  CommentSection,
  CommentText,
  ComponentCardHeader,
  NewsSection,
  NoCommentAvailable,
  PublishedDate,
  StyledNewsContainer,
} from "./styled";
import moment from "moment";
import { StarIcon, UserIcon } from "../../assets";
import { Divider } from "../../component/divider";
import parse from "html-react-parser";

export const NewsPage = ({ news }) => {
  console.log(news);
  return (
    <StyledNewsContainer>
      <Header />
      <NewsSection>
        <div>
          <a href={news.url} target="_blank">
            <h1>{news.title}</h1>
            <div
              style={{ display: "flex", alignItems: "center" }}
              title={`points: ${news.points}`}
            >
              <StarIcon />
              <span style={{ marginLeft: ".5em" }}>{news.points}</span>
            </div>
            <PublishedDate>
              published: {moment(news.created_at).format("DD MMM YYYY hh:mm a")}
            </PublishedDate>
          </a>
        </div>
        <Spacer size="16px" />
        <Divider />
      </NewsSection>
      <CommentSection>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Comments:
        </p>
        {news.children.length === 0 ? (
          <NoCommentAvailable>No comments available</NoCommentAvailable>
        ) : (
          news.children.map((eachComment) => {
            if (!eachComment.text) {
              return null;
            }
            return (
              <CommentCard>
                <ComponentCardHeader>
                  <UserIcon />
                  <Spacer xAxis size="8px" />
                  <span style={{ fontWeight: "bold" }}>
                    {eachComment.author ? eachComment.author : "Anonymous"}
                  </span>
                  <CommentDate>
                    {moment(eachComment.created_at).fromNow()}
                  </CommentDate>
                </ComponentCardHeader>
                <Spacer size="6px" />
                <CommentText>{parse(eachComment.text)}</CommentText>
                <Spacer size="6px" />
              </CommentCard>
            );
          })
        )}
      </CommentSection>
    </StyledNewsContainer>
  );
};
