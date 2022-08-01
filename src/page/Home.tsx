import React from "react";
import Header from "../components/layout/Header";
import SearchBar from "../components/search/SearchBar";
import BackHeader from "../components/layout/BackHeader";
import Layout from "../components/layout/Layout";
import tw from "tailwind-styled-components";
import "./home.css";
import Card from "../common/Card";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <Header />
      <SearchBar />
      <BackHeader />
      <div className="flex flex-col max-w-3xl mx-auto justify-center items-center pt-10 gap-10 mt-24">
        <Link to="/booked">예약페이지</Link>
        <Link to="/result">검색결과페이지</Link>
        <Card />
        <Card />
        <Card />
      </div>
      asds 모든 기본 세팅은 Layout하나만 불러오면 되게
      <a className="aa">
        asds
        <p className="ddd">dsfjklsfdlkj</p>
        ada
      </a>
      홈ddd
    </Layout>
  );
};

export default Home;

const Head = tw.div`
text-gray-300 
`;
