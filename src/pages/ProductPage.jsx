import React, { useState, useEffect } from "react";
import { Footer } from "../componenets/Footer";
import { Navbar } from "../componenets/Navbar";
import { Announcement } from "../componenets/Announcement";
import "../sass/pages/productpage.scss";
import { useLocation } from "react-router";

export const ProductPage = () => {
  const location = useLocation();
  const [productData, setProductData] = useState();

  useEffect(() => {
    setProductData(location.state);
  },[]);

  return (
    <div className="product_page-container">
      <Navbar />
      <Announcement />
      <div className="product_detail-container">
        <div className="product_img-wrapper">
          <img src={location.state.img} alt="img" className="product-img" />
        </div>
        <div className="product_data">
          <div className="product_name-title">{location.state.title}</div>
          <div className="product_description">
            {location.state.description}
          </div>
          <div className="product_price">
            <i className="fas fa-dollar-sign"></i> {location.state.price}{" "}
          </div>
          <div className="product-filter">
            <div className="colors-filter">
              <h1 className="colors-filter-title">Color:</h1>
              {location.state.colors.map((color, i) => (
                <div
                  key={i}
                  className={`color-selection color-filter-${color}`}
                ></div>
              ))}
            </div>
            <div className="sizes-filter">
              <h1 className="sizes-filter-title">Size</h1>
              <select name="size" id="size">
                {location.state.sizes.map((size, i) => (
                  <option key={i} value={size}>
                    {size}
                  </option>
                ))}
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
