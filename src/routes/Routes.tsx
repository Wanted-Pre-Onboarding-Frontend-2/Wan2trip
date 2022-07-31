import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Result from "../page/Result";
import BookedList from "../page/BookedList";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {["/", "/home", "*"].map((path) => {
            return <Route path={path} element={<Home />} key={path} />;
          })}
          <Route path="/result" element={<Result />} />
          <Route path="/booked" element={<BookedList />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
