"use client";

import { useEffect, useState } from "react";
import "../style.css";

export default function Categories({ setCategory, CategoryData }) {
  const [categoryList, setCategoryList] = useState([])

  console.log(categoryList);
  useEffect(() => {

    if (CategoryData) {
      setCategoryList(CategoryData)
    }

  }, []);
  return (
    <div className="categoryContainer">
      <button onClick={() => setCategory(0)}>ALL</button>
      {categoryList?.map((x, i) =>
        <button key={i} onClick={() => setCategory(x.id)}>{x.name}</button>
      )} 
    </div>
  );
}
