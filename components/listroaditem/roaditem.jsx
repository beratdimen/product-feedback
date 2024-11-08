"use client";

import LikeBtn from "@/components/like-button";
import "./roaditem.css";
import { CommentsIcon } from "@/helpers/icons";

export default function ListRoadItem({ commentCount, detail, name, status, title, upvoteCount, selected }) {
  if (document.body.classList === "bodycontent") {
    document.body.classList.remove("bodycontent");
  }
  return (
    <div className={selected === 1 ? "Planned" : selected === 2 ? "InProgress" : selected === 3 ? "Live" : ""}>
      <div className="listroadItemContent">
        <p>
          <span>●</span>{status === 1 ? "Planned" : status === 2 ? "InProgress" : status === 3 ? "Live" : ""}
        </p>
        <div className="listroadItemText">
          <h2>{title}</h2>
          <p>
            {detail}
          </p>
        </div>
        <p className="tags">{name}</p>
        <div className="listlikesComments">
          <LikeBtn />
          <p>
            <CommentsIcon /> {commentCount}
          </p>
        </div>
      </div>
    </div>
  );
}
