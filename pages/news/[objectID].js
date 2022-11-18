import React from "react";
import { NewsPage } from "../../section/news";

const News = ({ newsData, status }) => {
  return (
    <div>
      <NewsPage news={newsData} status={status} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  try {
    const result = await fetch(
      `http://hn.algolia.com/api/v1/items/${params.objectID}`
    );
    const data = await result.json();
    return {
      props: {
        newsData: data,
      },
    };
  } catch (error) {
    return {
      props: {
        status: false,
        message: error,
      },
    };
  }
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default News;
