import React from "react";
import Header from "../components/layout/Header";
import SearchBar from "../components/search/SearchBar";
import Layout from "../components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <div className=" relative z-auto m-2 text-4xl top-10 font-bold text-[#103922] hidden md:block ">
        Play, Share, Stay, 트립비토즈
      </div>
      <SearchBar />
    </Layout>
  );
};

export default Home;
