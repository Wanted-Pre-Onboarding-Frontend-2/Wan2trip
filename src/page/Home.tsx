import React from "react";
import Header from "../components/layout/Header";
import SearchBar from "../components/search/SearchBar";
import BackHeader from "../components/layout/BackHeader";
import Layout from "../components/layout/Layout";
import tw from "tailwind-styled-components";
import Card from "../common/Card";
import { Link } from "react-router-dom";
import HotelList from "../components/HotelList";
const Home = () => {
  return (
    <Layout>
      <Header />
      <SearchBar />
      <div className="flex flex-col items-center justify-center w-full gap-10 mx-auto md:pt-16 md:mt-44">
        <HotelList />
      </div>
    </Layout>
  );
};

export default Home;
