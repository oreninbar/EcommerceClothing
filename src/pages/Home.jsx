import React from "react";
import { Navbar } from "../componenets/Navbar";
import { Announcement } from "../componenets/Announcement";
import { Slider } from "../componenets/Slider.jsx";
import { Categories } from "../componenets/Categories";
import Products from "../componenets/Products";
import Newsletter from "../componenets/Newsletter";
import { Footer } from "../componenets/Footer";

export const Home = () => {
  return (
    <div className="homepage-container">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
