"use client";

import LikeBtn from "@/components/like-button";
import "./roaditem.css";
import { CommentsIcon } from "@/helpers/icons";

export default function ListRoadItem({ selected }) {
  if (document.body.classList === "bodycontent") {
    document.body.classList.remove("bodycontent");
  }

  return (
    <div className="listroaditem">
      <div className="listroadItemHeader">
        <h6>
          {selected === 1
            ? "Planned (1)"
            : selected === 2
            ? "In-Progress (1)"
            : "Live (1)"}
        </h6>
        <span>Ideas prioritized for research</span>
      </div>
      <div
        className="listroadItemContent"
        style={{
          borderTop:
            selected === 1
              ? "6px solid var(--plannedColor)"
              : selected === 2
              ? "6px solid var(--inProgreessColor)"
              : "6px solid var(--liveColor)",
        }}
      >
        <p>
          <span
            style={{
              color:
                selected === 1
                  ? "var(--plannedColor)"
                  : selected === 2
                  ? "var(--inProgreessColor)"
                  : "var(--liveColor)",
            }}
          >
            ●
          </span>
          {selected === 1 ? "Planned" : selected === 2 ? "In-Progress" : "Live"}
        </p>
        <div className="listroadItemText">
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
