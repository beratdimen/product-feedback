import { CommentsIcon } from "@/helpers/icons";
import "./style.css";
import LikeBtn from "../like-button";
import Link from "next/link";

export default function FeedbackCard({ feedback }) {
  return (
    <div className="cardContainer">
      <LikeBtn feedback={feedback} />
      <div className="contentGeneral">
        <Link href={"/suggestions/" + feedback.id}>
          <div className="content">
            <h3>{feedback.title}</h3>
            <p>{feedback.detail}</p>
            <span>Category</span>
          </div>
        </Link>
      </div>
      <p className="comments">
        <CommentsIcon /> {feedback.commentCount}
      </p>
    </div>
  );
}
