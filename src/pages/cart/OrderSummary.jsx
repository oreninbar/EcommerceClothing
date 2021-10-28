import React from "react";
import '../../sass/pages/cart/ordersummary.scss'

export const OrderSummary = () => {
  return (
    <div className="order_summary-container">
      <div className="summary-title">ORDER SUMMARY</div>
      <div className="summary-details">
        <div className="order-subtotal">
          <h1 className="subtotal-title title">Subtotal</h1>
          <div className="product_price">
            <i className="fas fa-dollar-sign"></i> 20{" "}
          </div>
        </div>
        <div className="order-estimate-shiping">
          <h1 className="stimate-shiping-title title">Estimate Shiping</h1>
          <div className="product_price">
            <i className="fas fa-dollar-sign"></i> 15{" "}
          </div>
        </div>
        <div className="order-shipping-discount">
          <h1 className="shipping-discount-title title">Shipping Discount</h1>
          <div className="product_price">
            <i className="fas fa-dollar-sign"></i> 35{" "}
          </div>
        </div>
        <div className="order-total">
          <h1 className="total-title title">Total</h1>
          <div className="product_price">
            <i className="fas fa-dollar-sign"></i> 80{" "}
          </div>
        </div>
        <button className="checkout_now-btn">Checkout</button>
      </div>
    </div>
  );
};
