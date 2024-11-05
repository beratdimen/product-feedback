import { CommentsIcon } from "@/helpers/icons";
import "./style.css";
import LikeBtn from "../like-button";
import Link from "next/link";

export default function FeedbackCard({ id, title, detail, commentCount, upvoteCount, name }) {
  return (
    <div className="cardContainer">
      <LikeBtn upvoteCount={upvoteCount} />
      <div className="contentGeneral">
        <Link href={"/suggestions/" + id}>
          <div className="content">
            <h3>{title}</h3>
            <p>{detail}</p>
            <span>{name}</span>
          </div>
        </Link>
      </div>
      <p className="comments">
        <CommentsIcon /> {commentCount}
      </p>
    </div>
  );
}
