import React, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import ResultWeb from "../components/result/ResultWeb";
import ResultTablet from "../components/result/ResultTablet";

const Result = () => {
  return (
    <Layout>
      <Header />
      <div className="-mt-10">
        <SearchBar />
      </div>
      <div className="lg:block md:hidden sm:hidden">
        <ResultWeb />
      </div>
      <div className="md:block sm:bolck lg:hidden">
        <ResultTablet />
      </div>
    </Layout>
  );
};
export default Result;
