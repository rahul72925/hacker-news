import React from "react";
import { InputField, Spacer } from "../../component";
import { HomeContainer, PublishedDate, StyledCard } from "./styled";

export const HomePage = () => {
  const [newsList, setNewsList] = React.useState([]);
  const [isNewsFetching, setIsNewsFetching] = React.useState(false);

  const handleSearchFiledOnChange = async (e) => {
    setIsNewsFetching(true);
    const { value } = e.target;

    const result = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${value}`
    );
    const data = await result.json();
    setNewsList(data.hits);
    setIsNewsFetching(false);
  };

  return (
    <HomeContainer>
      <Spacer size="15px" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputField
          placeholder="Search here..."
          style={{
            position: "sticky",
          }}
          onChange={handleSearchFiledOnChange}
        />
      </div>
      <Spacer size="7px" />
      <div>
        {newsList.length === 0
          ? null
          : newsList.map((news) => {
              if (!news.title) return null;
              return (
                <StyledCard key={news.objectID}>
                  <a>
                    <span>{news.title}</span>
                    <PublishedDate>
                      published: {dateFormatter(news.created_at)}
                    </PublishedDate>
                  </a>
                </StyledCard>
              );
            })}
      </div>
    </HomeContainer>
  );
};

const dateFormatter = (date) => {
  const newDate = new Date(date);

  return newDate.toLocaleString();
};
