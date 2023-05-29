import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import PageNotFound from "./Pages/PageNotFound";
import Technologies from "./Pages/Technologies";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";

const AppRouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactUs/:id" element={<ContactUs />} />
            <Route path="technologies" element={<Technologies />} />
            <Route path="services" element={<Services />} />
            <Route path="careers" element={<Careers />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouterComponent;
