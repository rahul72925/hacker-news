import React from "react";
import { InputField, Spacer } from "../../component";
import {
  FillerWrapper,
  HomeContainer,
  PublishedDate,
  StyledCard,
} from "./styled";
import { useRouter } from "next/router";
import { Else, If, Then } from "react-if";
import { ErrorFiller, NoDataFiller } from "../../assets";
import { Loader } from "../../component/loader";
import { debounce } from "../../utils/debounce";

export const HomePage = () => {
  const router = useRouter();

  const [newsList, setNewsList] = React.useState([]);
  const [newsFetchingStatus, setNewsFetchingStatus] = React.useState("IDLE");

  const handleSearchFiledOnChange = debounce(async (e) => {
    try {
      setNewsFetchingStatus("LOADING");
      const { value } = e.target;
      if (value.length === 0) {
        setNewsFetchingStatus("IDLE");
        setNewsList([]);
        return;
      }

      const result = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${value}`
      );
      const data = await result.json();
      setNewsList(data.hits);
      setNewsFetchingStatus("SUCCEEDED");
    } catch (error) {
      console.error("new fetching error", error);
      setNewsFetchingStatus("ERROR");
    }
  }, 500);

  const handleOnNewsClick = (objectID) => {
    router.push(`/news/${objectID}`);
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
      <If condition={newsFetchingStatus === "IDLE"}>
        <Then>
          <FillerWrapper>
            <NoDataFiller />
            <h2>Search for get latest Hacker NEWS</h2>
          </FillerWrapper>
        </Then>
        <Else>
          <If condition={newsFetchingStatus === "LOADING"}>
            <Then>
              <FillerWrapper>
                <Loader />
              </FillerWrapper>
            </Then>
            <Else>
              <If condition={newsFetchingStatus === "ERROR"}>
                <Then>
                  <FillerWrapper>
                    <ErrorFiller />
                    <h2>Something went wrong!</h2>
                  </FillerWrapper>
                </Then>
                <Else>
                  <If
                    condition={
                      newsFetchingStatus === "SUCCEEDED" &&
                      newsList.length === 0
                    }
                  >
                    <Then>
                      <FillerWrapper>
                        <NoDataFiller />
                        <h2>No news found</h2>
                      </FillerWrapper>
                    </Then>
                    <Else>
                      <div>
                        {newsList.length === 0
                          ? null
                          : newsList.map((news) => {
                              if (!news.title) return null;
                              return (
                                <StyledCard key={news.objectID}>
                                  <a
                                    href={`/news/${news.objectID}`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleOnNewsClick(news.objectID);
                                    }}
                                  >
                                    <span>{news.title}</span>
                                    <PublishedDate>
                                      published:{" "}
                                      {dateFormatter(news.created_at)}
                                    </PublishedDate>
                                  </a>
                                </StyledCard>
                              );
                            })}
                      </div>
                    </Else>
                  </If>
                </Else>
              </If>
            </Else>
          </If>
        </Else>
      </If>
    </HomeContainer>
  );
};

const dateFormatter = (date) => {
  const newDate = new Date(date);

  return newDate.toLocaleString();
};
