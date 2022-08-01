import React from "react";
import Header from "../components/layout/Header";
import SearchBar from "../components/layout/SearchBar";
import Layout from "../components/layout/Layout";
import tw from "tailwind-styled-components";
import { Calender } from "../components/calender/Calender";
const Calenders = () => {
  return (
    <Layout>
      <Header />
      <Calender />
    </Layout>
  );
};

export default Calenders;
