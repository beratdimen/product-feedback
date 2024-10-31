"use client";

import { useEffect, useState } from "react";
import "../style.css";
import { getFeedback } from "@/utils/fetchBase";

export default function Categories() {
  const [category, setCategory] = useState(() => {
    // Sayfa yüklendiğinde localStorage'dan category'yi okuyoruz
    const savedCategory = localStorage.getItem("category");
    return savedCategory !== null ? parseInt(savedCategory, 10) : "";
  });

  useEffect(() => {
    // category her değiştiğinde localStorage'a kaydediyoruz
    localStorage.setItem("category", category);

    async function getFeddbacks() {
      const { response, error } = await getFeedback(category);
      console.log({ response });
      console.log({ error });
    }
    getFeddbacks();
  }, [category]);

  return (
    <div className="categoryContainer">
      <button onClick={() => setCategory(0)}>All</button>
      <button onClick={() => setCategory(1)}>UI</button>
      <button onClick={() => setCategory(2)}>UX</button>
      <button onClick={() => setCategory(3)}>Enhancement</button>
      <button onClick={() => setCategory(4)}>Bug</button>
      <button onClick={() => setCategory(5)}>Feature</button>
    </div>
  );
}
