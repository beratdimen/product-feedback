"use client";

import { DownArrowGray, DownIcon, Tick } from "@/helpers/icons";
import "./style.css";
import { useState } from "react";

export default function SortByFilter({ setFeedbackData, feedbackData }) {
  const [filtershow, setFilterShow] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("Most Upvotes");

  const handleSelect = (index) => {
    setSelectedBtn(index);
  };

  const handleSelectText = (text) => {
    setSelectedFilter(text);
  };

  const MostUpvotes = () => {
    const sortedData = [...feedbackData.feedbacks].sort((a, b) => b.upvoteCount - a.upvoteCount);
    setFeedbackData({ ...feedbackData, feedbacks: sortedData });
  };

  const LeastUpvotes = () => {
    const sortedData = [...feedbackData.feedbacks].sort((a, b) => a.upvoteCount - b.upvoteCount);
    setFeedbackData({ ...feedbackData, feedbacks: sortedData });
  };

  const MostComments = () => {
    const sortedData = [...feedbackData.feedbacks].sort((a, b) => b.commentCount - a.commentCount);
    setFeedbackData({ ...feedbackData, feedbacks: sortedData });
  };

  const LeastComments = () => {
    const sortedData = [...feedbackData.feedbacks].sort((a, b) => a.commentCount - b.commentCount);
    setFeedbackData({ ...feedbackData, feedbacks: sortedData });
  };

  return (
    <div className="filter" onClick={() => setFilterShow(!filtershow)}>
      <span>Sort by : </span> <h5>{selectedFilter}</h5> {filtershow ? <DownArrowGray /> : <DownIcon />}

      <div
        className="filterChoices"
        style={{
          display: filtershow ? "block" : "none",
        }}
      >
        <button
          type="button"
          onClick={() => {
            handleSelect(0);
            handleSelectText("Most Upvotes");
            MostUpvotes();
          }}
          style={{
            color: selectedBtn === 0 ? "#AD1FEA" : "#647196",
          }}
        >
          Most Upvotes {selectedBtn === 0 && <Tick />}
        </button>
        <button
          type="button"
          onClick={() => {
            handleSelect(1);
            handleSelectText("Least Upvotes");
            LeastUpvotes();
          }}
          style={{
            color: selectedBtn === 1 ? "#AD1FEA" : "#647196",
          }}
        >
          Least Upvotes {selectedBtn === 1 && <Tick />}
        </button>
        <button
          type="button"
          onClick={() => {
            handleSelect(2);
            handleSelectText("Most Comments");
            MostComments();
          }}
          style={{
            color: selectedBtn === 2 ? "#AD1FEA" : "#647196",
          }}
        >
          Most Comments {selectedBtn === 2 && <Tick />}
        </button>
        <button
          type="button"
          onClick={() => {
            handleSelect(3);
            handleSelectText("Least Comments");
            LeastComments();
          }}
          style={{
            color: selectedBtn === 3 ? "#AD1FEA" : "#647196",
          }}
        >
          Least Comments {selectedBtn === 3 && <Tick />}
        </button>
      </div>
    </div>
  );
}
