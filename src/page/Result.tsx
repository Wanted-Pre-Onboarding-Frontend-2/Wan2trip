import React from "react";
import SearchBar from "../components/search/SearchBar";
import Layout from "../components/layout/Layout";
import tw from "tailwind-styled-components";
import Header from "../components/layout/Header";

const Result = () => {
  return (
    <Layout>
      <Header />
      <div className="-mt-10">
        <SearchBar />
      </div>
      <div>검색 결과 페이지</div>
    </Layout>
  );
};

export default Result;
