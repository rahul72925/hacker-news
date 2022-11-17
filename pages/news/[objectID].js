import React from "react";
import { NewsPage } from "../../section/news";

const News = ({ newsData }) => {
  return (
    <div>
      <NewsPage news={newsData} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const result = await fetch(
    `http://hn.algolia.com/api/v1/items/${params.objectID}`
  );
  const data = await result.json();
  return {
    props: {
      newsData: data,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default News;
