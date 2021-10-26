import React from "react";
import { Footer } from "../componenets/Footer";
import { Navbar } from "../componenets/Navbar";
import Products from "../componenets/Products";
import "../sass/pages/productlist.scss";

export const ProductsList = () => {
  return (
    <div className="productlist-continer">
      <div className="header">
        <Navbar />
      </div>
      <h1 className="category-title">Dresses</h1>
      <div className="list-sorting-container">
        <div className="filter-product">
          <label className="filter-products-title">Filter Products</label>
          <select name="color" id="color" className="input-color">
            <option value="black" className="black">
              black
            </option>
            <option value="blue" className="blue">
              blue
            </option>
            <option value="red" className="red">
              red
            </option>
            <option value="white" className="white">
              white
            </option>
            <option value="green" className="green">
              green
            </option>
            <option value="gray" className="gray">
              gray
            </option>
          </select>
          <select name="size" id="size" className="input-size">
            <option value="size" className="input-size">
              Size
            </option>
            <option value="small" className="input-small">
              S
            </option>
            <option value="medium" className="input-medium">
              M
            </option>
            <option value="large" className="input-large">
              L
            </option>
            <option value="extra_large" className="input-extra_large">
              XL
            </option>
            <option
              value="extra_extra_large"
              className="input-extra_extra_large"
            >
              XXL
            </option>
          </select>
        </div>
        <div className="sort-product">
          <label className="filter-sortproducts-title">Sort Products</label>
          <select name="sort" id="sort" className="input-sort">
            <option value="newest" className="input-newest">
              Newest
            </option>
            <option value="price" className="input-price-asc">
              Price (asc)
            </option>
            <option value="medium" className="input-medium">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <div className="clothes-container">
        <Products />
        <Footer />
      </div>
    </div>
  );
};
