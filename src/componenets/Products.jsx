import React from "react";
import  Product  from "./Product.jsx";
import "../sass/components/products.scss";
import { popularProducts } from "../data";

const Products = () => {
  return (
    <div className="products-container">
      {popularProducts.map((p, i) => 
        <Product key={i} image={p} />
      )}
    </div>
  );
};

export default Products;