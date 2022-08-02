import React, { useLayoutEffect } from "react";
import {
  BrowserRouter,
  LayoutRouteProps,
  Route,
  Routes,
  RoutesProps,
  useLocation,
} from "react-router-dom";
import Home from "../page/Home";
import Result from "../page/Result";
import BookedList from "../page/BookedList";
import { RecoilRoot } from "recoil";
import Calender from "page/Calendar";

// TODO: children type 지정
const ScrollToTop = ({ children }: any) => {
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
            <Route path="/booked" element={<BookedList />} />
            <Route path="/cal" element={<Calender />} />
          </Routes>
        </ScrollToTop>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
