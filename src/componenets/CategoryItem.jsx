import React from "react";
import "../sass/components/categoryItem.scss";

const CategotyItem = (props) => {
  return (
    <div className="category-item-container">
      <img alt="categoo" className="category-img" src={props.data.img} />
      <h1 className="category-title"  >{props.data.title}</h1>
      <button className="category-btn">shop now</button>
    </div>
  );
};

export default CategotyItem;
