"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Roadmap({ feedbackData }) {
  const [filterLength, setFilterLength] = useState({
    planned: [],
    inProgress: [],
    live: []
  });//burda hepsi için ayrı ayrı elemanlar oluşturuluyo

  useEffect(() => {
    if (feedbackData?.feedbacks) {
      setFilterLength({
        planned: feedbackData.feedbacks.filter(x => x.status === 1),
        inProgress: feedbackData.feedbacks.filter(x => x.status === 2),
        live: feedbackData.feedbacks.filter(x => x.status === 3)
      });
    }
  }, [feedbackData]);//bu useeffect içinde ise hepsi için ayrı ayrı filtreleme yapıp çıkan sonuçlar elemanlara atanıyor.Sonrasında bu dizilerin uzunlukları gerekn yerlere yazılıyor

  return (
    <div className="roadmapContainer">
      <div className="roadmapHeader">
        <h3>Roadmap</h3>
        <Link href={"/roadmap"}>View</Link>
      </div>
      <ul>
        <li className="planned">
          <p><span>●</span> Planned</p>
          <span>{filterLength.planned.length}</span>
        </li>
        <li className="inProgress">
          <p><span>●</span> In-Progress</p>
          <span>{filterLength.inProgress.length}</span>
        </li>
        <li className="live">
          <p><span>●</span> Live</p>
          <span>{filterLength.live.length}</span>
        </li>
      </ul>
    </div>
  );
}
