import React from "react";
import Header from "../components/layout/Header";
import SearchBar from "../components/search/SearchBar";
import HomeBackground from "../components/layout/HomeBackground";
import Layout from "../components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      {/* TODO: ?? */}
      {/* <div className=" relative z-auto m-2 text-4xl top-28 font-bold text-[#103922] md:hidden lg:block">
        Play, Share, Stay, 트립비토즈
      </div> */}
      <div className=" relative z-auto m-2 text-4xl top-28 font-bold text-[#103922] ">
        Play, Share, Stay, 트립비토즈
      </div>
      {/* 
            <div className="hidden mt-6 md:hidden lg:block">
        <ResultWeb />
            </div>
       */}
      <SearchBar />
      <div className="flex flex-col items-center justify-center w-full gap-10 mx-auto md:pt-16 md:mt-44"></div>
    </Layout>
  );
};

export default Home;
