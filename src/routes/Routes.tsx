import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../page/Home";
import Result from "../page/Result";
import BookedListPage from "../page/BookedListPage";
import { RecoilRoot } from "recoil";
import Calender from "page/Calendar";

type Props = {
  children: JSX.Element;
};

const ScrollToTop = ({ children }: Props) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ScrollToTop>
          <Routes>
            {["/", "/home", "*"].map((path) => {
              return <Route path={path} element={<Home />} key={path} />;
            })}
            <Route path="/result" element={<Result />} />
            <Route path="/booked" element={<BookedListPage />} />
            <Route path="/cal" element={<Calender />} />
          </Routes>
        </ScrollToTop>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
