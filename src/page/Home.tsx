import React from "react";
import Header from "../components/layout/Header";
import SearchBar from "../components/search/SearchBar";
import BackHeader from "../components/layout/BackHeader";
import Layout from "../components/layout/Layout";
import Background from "../static/image/background.jpg";

const HomeStyle = {
  backgroundImage: "url(" + { Background } + ")",
};

const Home = () => {
  return (
    <Layout>
      <div style={HomeStyle}>
        <img src={Background} alt="" />
        <Header />
        <div>Play, Share, Stay 트립비토즈</div>
        <SearchBar />
        {/* <div className="flex flex-col items-center justify-center w-full gap-10 mx-auto md:pt-16 md:mt-44"></div> */}
      </div>
    </Layout>
  );
};

export default Home;
