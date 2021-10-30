import React from "react";
import { popularProducts } from "../../data";
import "../../sass/pages/cart/cartproduct.scss";

export const CartProduct = () => {
  return (
    <div className="cart_product-container">
      <img
        src={popularProducts[1].img}
        alt="image"
        className="cart-product-img"
      />
      <div className="cart_product-detail">
        <div className="cart-product-name title">
          Product: <span>JESSIE THUNDER SHOES</span>
        </div>
        <div className="cart-product-id title">
          ID: <span>120918233</span>
        </div>
        <div className="cart-product-color title">
          Color: <span>black</span>
        </div>
        <div className="cart-product-size title">
          Size: <span>37.7</span>
        </div>
      </div>
      <div className="cart_product-price">
        <div className="amount">
          <i className="fas fa-minus"></i>
            <h2>1</h2>
          <i className="fas fa-plus"></i>
        </div>
        <div className="product_price">
          <i className="fas fa-dollar-sign"></i> 20{" "}
        </div>
      </div>
      <hr className="product-line-border" />
    </div>
  );
};
