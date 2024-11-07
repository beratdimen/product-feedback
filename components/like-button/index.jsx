"use client";

import { UpIcon } from "@/helpers/icons";
import "./style.css";
import { upvoteFeedback } from "@/action/actions";
import { getMe } from "@/utils/fetchBase";
import { toast } from "sonner";

export default function LikeBtn({ upvoteCount, id }) {
  console.log(id);

  async function handleSubmit(e) {
    e.preventDefault();

    const user = await getMe();
    console.log(user, "userss");
    if (user.data) {
      try {
        const result = await upvoteFeedback(id);
        console.log(result);
      } catch (error) {
        console.error("Error while upvoting:", error);
      }
    } else {
      toast.error("Lütfen Giriş Yapınız");
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
