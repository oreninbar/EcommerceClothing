import React from "react";
import "../sass/components/product.scss";
import { useHistory } from "react-router-dom";
 
const Product = (props) => {
  let history = useHistory();

  const handleClick=()=>{
    history.push("/product",props);
  }
  return (
    <div className="product-container" >
      <div className="product-background"></div>
      <img
        className="product-img"
        alt="product-img"
        src={props.img}
      ></img>
      <div className="buttons-wrapper">
        <div className="cart-wrapper btn-product-wrapper">
          <i className="fas fa-cart-plus"></i>
        </div>
        <div className="search-wrapper btn-product-wrapper" onClick={handleClick}>
          <i className="fas fa-search"></i>{" "}
        </div>
        <div className="heart-wrapper btn-product-wrapper">
          <i className="far fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default Product;
