import { CommentsIcon } from "@/helpers/icons";
import "./style.css";
import LikeBtn from "../like-button";

export default function FeedbackDetailCard({ data }) {
  console.log(data, "dataaa");
  return (
    <div className="cardContainer">
      <LikeBtn upvoteCount={data?.upvoteCount} />
      <div className="contentGeneral">
        <div className="content">
          <h3>{data?.title}</h3>
          <p>{data?.detail}</p>
          <span>Category</span>
        </div>
      </div>
      <p className="comments">
        <CommentsIcon /> {data?.commentCount}
      </p>
    </div>
  );
}
