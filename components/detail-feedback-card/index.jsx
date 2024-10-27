import { RightIcon } from "@/helpers/icons";
import FeedbackCard from "../feedback-card";
import "./style.css";
import EditButton from "../edit-button";
import Comments from "../comments";
import AddComment from "../add-comment";
import Link from "next/link";
export default function DetailFeedback({ opendialog }) {
  return (
    <div className="detailContainer">
      <div className="detailHeader">
       <Link href={"/"}> <button className="backBtn">
          <RightIcon /> Go Back
        </button></Link>
        <EditButton opendialog={opendialog} />
      </div>
      <FeedbackCard />
      <Comments />
      <AddComment />
    </div>
  );
}
