"use client";
import { UpIcon } from "@/helpers/icons";
import "./style.css";
import { useState } from "react";

export default function LikeBtn() {
  const [like, setLike] = useState(20);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    if (liked) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setLiked(!liked);
  }

  return (
    <div className="likeButton">
      <button onClick={handleLike}>
        <UpIcon /> {like}
      </button>
    </div>
  );
}
