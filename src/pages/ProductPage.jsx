import React from "react";
import { Footer } from "../componenets/Footer";
import { Navbar } from "../componenets/Navbar";
import { Announcement } from "../componenets/Announcement";
import { popularProducts } from "../data";
import "../sass/pages/productpage.scss";


export const ProductPage = () => {
  return (
    <div className="product_page-container">
      <Navbar />
      <Announcement />
      <div className="product_detail-container">
        <div className="product_img-wrapper">
          <img src={popularProducts[6].img} alt="img" className="product-img" />
        </div>
        <div className="product_data">
          <div className="product_name-title">Denim Jumpsuit</div>
          <div className="product_description">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
          <div className="product_price">
            <i className="fas fa-dollar-sign"></i> 20{" "}
          </div>
          <div className="product-filter">
            <div className="colors-filter">
              <h1 className="colors-filter-title">Color:</h1>
              <div className="color-selection color-filter-black "></div>
              <div className="color-selection color-filter-blue"></div>
              <div className="color-selection color-filter-grey"></div>
            </div>
            <div className="sizes-filter">
              <h1 className="sizes-filter-title">Size</h1>
              <select name="size" id="size">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">Xl</option>
                <option value="xxl">XXL</option>
              </select>
            </div>
          </div>
          <div className="amount">
            <i className="fas fa-minus"></i>
            <input type="number" value={1} className="amount-filter" />
            <i className="fas fa-plus"></i>
          </div>
          <button className="btn_add_to_cart">ADD TO CART</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
