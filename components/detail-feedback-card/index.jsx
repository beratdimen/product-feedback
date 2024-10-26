import { RightIcon } from "@/helpers/icons";
import FeedbackCard from "../feedback-card";
import "./style.css";
import EditButton from "../edit-button";
import Comments from "../comments";
import AddComment from "../add-comment";
export default function DetailFeedback({ opendialog }) {
  return (
    <div className="detailContainer">
      <div className="detailHeader">
        <button className="backBtn">
          <RightIcon /> Go Back
        </button>
        <EditButton opendialog={opendialog} />
      </div>
      <FeedbackCard />
      <Comments />
      <AddComment />
    </div>
  );
}
