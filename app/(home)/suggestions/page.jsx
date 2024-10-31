"use client";

import { useEffect, useState } from "react";
import FeedbackCard from "@/components/feedback-card";
import "./style.css";
import { getFeedback, getMe } from "@/utils/fetchBase";

export default function SuggestionsPage() {
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
    async function GetMe() {
      const { response, error } = await getMe();
      if (!error) {
        setGetUser(response);
        console.log(response, "response user");
        
      } else {
        console.error(error);
      }
    }
    GetMe();
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
    <div className="gg">
      {feedbackData?.map((feedback, index) => (
        <FeedbackCard key={index} {...feedback} />
      ))}
 
    </div>
  );
}
