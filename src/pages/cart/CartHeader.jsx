import React from "react";
import { Link } from "react-router-dom";
import '../../sass/pages/cart/cartheader.scss'
export const CartHeader = () => {
  return (
    <div className="cart_header-container">
      <h1 className="cart-title">YOUR CART</h1>
      <div className="sub_cart_navbar">
        <Link to='/productslist' className="btn-continue-shopping ">CONTINUE SHOPPING</Link>
        <div className="products-in-cart-filters">
          <a href="#" className="shopping_bag link">
            Shopping Bag (2)
          </a>
          <a href="#" className="Wishlist link">
            Your Wishlist (1)
          </a>
        </div>
        <Link to='/productslist' className="btn-checkout">CHECKOUT NOW</Link>
      </div>
      {/* <hr style={{width:'inherit',color:'black'}}/> */}
    </div>
  );
};
