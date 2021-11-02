import React, {useSate} from "react";
import Product from "./Product.jsx";
import "../sass/components/products.scss";
import { popularProducts } from "../data";

const Products = () => {

  return (
    <div className="products-container">
      <h1 className="categories-title">POPULAR PRODUCTS</h1>
      <div className="products_items-container">
        {popularProducts.map((data, i) => (
          <Product key={i} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
