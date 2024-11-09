import { CommentsIcon } from "@/helpers/icons";
import "./style.css";
import LikeBtn from "../like-button";

export default function FeedbackDetailCard({ data, setActive }) {
  return (
    <div className="cardContainer">
      <LikeBtn upvoteCount={data?.upvoteCount} setActive={setActive} />
      <div className="contentGeneral">
        <div className="content">
          <h3>{data?.title}</h3>
          <p>{data?.detail}</p>
          <span>{data?.name}</span>
        </div>
      </div>
      <p className="comments">
        <CommentsIcon /> {data?.commentCount}
      </p>
    </div>
  );
}
