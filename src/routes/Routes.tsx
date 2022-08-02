import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../page/Home";
import Result from "../page/Result";
import BookedList from "../page/BookedList";
import Calender from "page/Calendar";

const Router = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Routes>
      {["/", "/home", "*"].map((path) => {
        return <Route path={path} element={<Home />} key={path} />;
      })}
      <Route path="/result" element={<Result />} />
      <Route path="/booked" element={<BookedList />} />
      <Route path="/cal" element={<Calender />} />
    </Routes>
  );
};

export default Router;
