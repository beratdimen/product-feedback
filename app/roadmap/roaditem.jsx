"use client";

import LikeBtn from "@/components/like-button";
import "./roaditem.css";
import { CommentsIcon } from "@/helpers/icons";

export default function RoadItem({ commentCount, detail, name, status, title, upvoteCount }) {
  if (document.body.classList === "bodycontent") {
    document.body.classList.remove("bodycontent");
  }
  return (
    <div className="roaditem">
      <div className="roadItemContent">
        <p>
          <span>●</span>{status === 1 ? "Planned" : status === 2 ? "InProgress" : status === 3 ? "Live" : ""}
        </p>
        <div className="roadItemText">
          <h2>{title}</h2>
          <p>
            {detail}
          </p>
        </div>
        <p className="tags">{name}</p>
        <div className="likesComments">
          <LikeBtn /> {upvoteCount}
          <p>
            <CommentsIcon /> {commentCount}
          </p>
        </div>
      </div>
    </div>
  );
}
