"use client";

import { useState } from "react";
import FeedbackCard from "@/components/feedback-card";
import "./style.css";

export default function Suggestions({ feedbackData, setPage, page }) {
  console.log(feedbackData, "213123123123213213213123213123");
  
  const [getUser, setGetUser] = useState([]);

  const result = Math.ceil(feedbackData.totalItems / feedbackData.pageSize);

  return (
    <div className="gg">
      {feedbackData?.feedbacks?.map((feedback, index) => (
        <FeedbackCard
          key={index}
          {...feedback}
          feedbackDatalength={feedbackData.length}
        />
      ))}

      <div className="pageCont">
        {[...Array(Number(result) || 0)].map((a, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            disabled={page === i + 1}
            className="pagination"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
