import { CommentsIcon } from "@/helpers/icons";
import "./style.css";
import LikeBtn from "../like-button";
import Link from "next/link";

export default function FeedbackDetailCard({ data }) {
  console.log(data, "data aaaaaaaaa");

  return (
    <div className="cardContainer">
      <LikeBtn upvoteCount={data?.feedbacks.upvoteCount} />
      <div className="contentGeneral">
        <div className="content">
          <h3>{data?.feedbacks.title}</h3>
          <p>{data?.feedbacks.detail}</p>
          <span>Category</span>
        </div>
      </div>
      <p className="comments">
        <CommentsIcon /> {data?.commentCount}
      </p>
    </div>
  );
}
