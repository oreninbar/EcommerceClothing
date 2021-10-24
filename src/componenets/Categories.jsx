import React from "react";
import CategoryItem  from "./CategoryItem.jsx";
import '../sass/components/categories.scss'
import { categories } from "../data.js";

export const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((c, i) => (
        <CategoryItem key={i} data={c} />
      ))}
    </div>
  );
};
