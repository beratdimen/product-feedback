"use client"

import { RightIcon } from "@/helpers/icons";
import FeedbackCard from "../feedback-card";
import "./style.css";
import EditButton from "../edit-button";
import Comments from "../comments";
import AddComment from "../add-comment";
import Link from "next/link";
import ThemeSwitch from "../header/dark-mode-button";
export default function DetailFeedback({ opendialog }) {
  
  if (document.body.classList === "bodycontent") {
    document.body.classList.remove("bodycontent");
  }
  return (
    <div className="detailContainer">
      <div className="detailHeader">
        <Link href={"/"}>
          <button className="backBtn">
            <RightIcon /> Go Back
          </button>
        </Link>
        <ThemeSwitch />
        <EditButton opendialog={opendialog} />
      </div>
      <FeedbackCard />
      <Comments />
      <AddComment />
    </div>
  );
}
