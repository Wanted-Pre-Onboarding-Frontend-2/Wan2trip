import React, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import ResultWeb from "../components/result/ResultWeb";
import ResultMobile from "../components/result/ResultMobile";

const Result = () => {
  return (
    <Layout>
      <Header />
      <div className="-mt-10">
        <SearchBar />
      </div>
      <div className="hidden md:hidden lg:block">
        <ResultWeb />
      </div>
      <div className="block lg:hidden">
        <ResultMobile />
      </div>
    </Layout>
  );
};
export default Result;
