import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import ThankYou from "../screens/ThankYou";

const AppRouter = () => {
  return (
    <Router basename="/book-publisher-lp">
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
