import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../page/Home";
import Result from "../page/Result";

import BookedListPage from "../page/BookedListPage";
import { RecoilRoot } from "recoil";
import Calender from "page/Calendar";

const Router = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
