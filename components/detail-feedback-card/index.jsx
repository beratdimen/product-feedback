import { RightIcon } from "@/helpers/icons";
import FeedbackCard from "../feedback-card";
import "./style.css";
import EditButton from "../edit-button";
import Comments from "../comments";
export default function DetailFeedback() {
  return (
    <div className="detailContainer">
      <div className="detailHeader">
        <button className="backBtn">
          <RightIcon /> Go Back
        </button>
        <EditButton />
      </div>
      <FeedbackCard />
      <Comments />
    </div>
  );
}
