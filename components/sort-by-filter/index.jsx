"use client";

import { DownArrowGray, DownIcon, Tick } from "@/helpers/icons";
import "./style.css";
import { useState } from "react";

export default function SortByFilter() {
  const [filtershow, setFilterShow] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("Most Upvotes");

  const handleSelect = (index) => {
    setSelectedBtn(index);
  };

  const handleSelectText = (index) => {
    setSelectedFilter(index);
  };

  return (
    <div className="filter" onClick={() => setFilterShow(!filtershow)}>
      <span>Sort by : </span> <h5>{selectedFilter}</h5> {filtershow ? <DownArrowGray /> : <DownIcon />}

      <div className="filterChoices" style={{
        display: filtershow ? "block" : "none",
      }}>
        <button type="button" onClick={() => { handleSelect(0); handleSelectText("Most Upvotes") }} style={{
          color: selectedBtn === 0 ? "#AD1FEA" : "#647196"
        }}>
          Most Upvotes {selectedBtn === 0 && <Tick />}
        </button>
        <button type="button" onClick={() => { handleSelect(1); handleSelectText("Least Upvotes") }} style={{
          color: selectedBtn === 1 ? "#AD1FEA" : "#647196"
        }}>
          Least Upvotes {selectedBtn === 1 && <Tick />}
        </button>
        <button type="button" onClick={() => { handleSelect(2); handleSelectText("Most Comments") }} style={{
          color: selectedBtn === 2 ? "#AD1FEA" : "#647196"
        }}>
          Most Comments {selectedBtn === 2 && <Tick />}
        </button>
        <button type="button" onClick={() => {handleSelect(3);handleSelectText("Least Comments ")}} style={{
          color: selectedBtn === 3 ? "#AD1FEA" : "#647196"
        }}>
          Least Comments {selectedBtn === 3 && <Tick />}
        </button>
      </div>
    </div>
  );
}
