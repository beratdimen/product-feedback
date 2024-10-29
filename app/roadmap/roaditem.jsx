"use client"

import LikeBtn from "@/components/like-button";
import "./roaditem.css";
import { CommentsIcon } from "@/helpers/icons";

export default function RoadItem({selected}) {
  
  if (document.body.classList === "bodycontent") {
    document.body.classList.remove("bodycontent");
  }
  return (
    <div className="roaditem">
      <div className="roadItemHeader">
        <h6>Planned(2)</h6>
        <span>Ideas prioritized for research</span>
      </div>
      <div className="roadItemContent">
        <p>
          <span>●</span>Planned
        </p>
        <div className="roadItemText">
          <h2>More comprehensive reports</h2>
          <p>
            It would be great to see a more detailed breakdown of solutions.
          </p>
        </div>
        <p className="tags">Feature</p>
        <div className="likesComments">
          <LikeBtn />
          <p>
            <CommentsIcon /> 8
          </p>
        </div>
      </div>
    </div>
  );
}
