"use client";

import { UpIcon } from "@/helpers/icons";
import "./style.css";
import { upvoteFeedback } from "@/action/actions";

export default function LikeBtn({ upvoteCount, id }) {

  console.log(id);


  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      const result = await upvoteFeedback(id);   
      console.log(result);   
    } catch (error) {
      console.error("Error while upvoting:", error); 
    }
  }

  return (
    <div className="likeButton">
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <UpIcon /> {upvoteCount}
        </button>
      </form>
    </div>
  );
}
