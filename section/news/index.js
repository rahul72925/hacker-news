import React from "react";
import { Header, Spacer } from "../../component";
import { NewsSection, PublishedDate, StyledNewsContainer } from "./styled";
import moment from "moment";
import { StarIcon } from "../../assets";
import { Divider } from "../../component/divider";

export const NewsPage = ({ news }) => {
  return (
    <StyledNewsContainer>
      <Header />
      <NewsSection>
        <div>
          <a href={news.url} target="_blank">
            <h2>{news.title}</h2>
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
    </StyledNewsContainer>
  );
};
