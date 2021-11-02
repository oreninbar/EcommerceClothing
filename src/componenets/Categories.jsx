import React, {useEffect,useState} from "react";
import CategoryItem  from "./CategoryItem.jsx";
import '../sass/components/categories.scss'
import {getCategories} from '../server_req/categories'

export const Categories = () => {
  const [categories,setCategories]=useState([])
  useEffect(async()=>{
    setCategories(await getCategories())
  },[categories])

  return (
    <div className="categories-container">
      <div className="categories-title">COLLECTIONS</div>
      {categories.map((c, i) => (
        <CategoryItem key={i} data={c} />
      ))}
    </div>
  );
};
