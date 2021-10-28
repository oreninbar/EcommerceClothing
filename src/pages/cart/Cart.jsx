import React from "react";
import { Announcement } from "../../componenets/Announcement";
import { Navbar } from "../../componenets/Navbar";
import { CartHeader } from "./CartHeader";
import "../../sass/pages/cart/cart.scss";
import { CartProduct } from "./CartProduct";
import { OrderSummary } from "./OrderSummary";

export const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-header-wrapper">
        <Navbar />
        <Announcement />
        <CartHeader />
      </div>
      <div className="main-cart-wrapper">
        <div className="cart-list-wrapper">
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <div className="cart-summary-wrapper">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};
