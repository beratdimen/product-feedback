"use client"

import { BulbIcon } from "@/helpers/icons";
import "./style.css";
import SortByFilter from "../sort-by-filter";
import AddButton from "../add-button";
import ThemeSwitch from "./dark-mode-button";
import { useEffect, useState } from "react";
import { getFeedback } from "@/utils/fetchBase";
export default function Header() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [getUser, setGetUser] = useState([]);
  const [category, setCategory] = useState(0);
 
  useEffect(() => {
    const savedCategory = localStorage.getItem("category");
    if (savedCategory) {
      setCategory(parseInt(savedCategory, 10));
    }
  }, []);
 
  useEffect(() => {
    async function fetchData() {
      const { response, error } = await getFeedback(category);
      if (!error) {
        setFeedbackData(response);
      } else {
        console.error(error);
      }
    }
    fetchData(); 
  }, [category]);

  console.log(getUser);
  
 
  useEffect(() => {
    const interval = setInterval(() => {
      const savedCategory = localStorage.getItem("category");
      if (savedCategory && parseInt(savedCategory, 10) !== category) {
        setCategory(parseInt(savedCategory, 10));
      }
    }, 1000);  

    return () => clearInterval(interval);  
  }, [category]);

  return (
    <div className="headerContainer">
      <div className="headerPiece">
        <div className="logo">
          <BulbIcon />
          <h4>{feedbackData?.feedbacks?.length} Suggestions</h4>
        </div>
        <SortByFilter />
        <ThemeSwitch />
      </div>
      <AddButton />
    </div>
  );
}
