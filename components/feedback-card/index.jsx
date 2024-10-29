import { CommentsIcon } from "@/helpers/icons";
import "./style.css";
import LikeBtn from "../like-button";
import Link from "next/link";

export default function FeedbackCard() {
  return (
    <div className="cardContainer">
      <div className="contentGeneral">
        <LikeBtn />
        <Link href={"/" + 1}>
          <div className="content">
            <h3>Add tags for solutions</h3>
            <p>Easier to search for solutions based on a specific stack.</p>
            <span>Category</span>
          </div>
        </Link>
      </div>
      <p className="comments">
        <CommentsIcon /> 8
      </p>
    </div>
  );
}
