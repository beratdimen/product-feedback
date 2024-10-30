"use client";

import { RightIcon } from "@/helpers/icons"; 
import "./style.css";
import EditButton from "../edit-button";
import Comments from "../comments";
import AddComment from "../add-comment";
import Link from "next/link";
import ThemeSwitch from "../header/dark-mode-button"; 
import FeedbackDetailCard from "../feedback-detail-card";
export default function DetailFeedback({ opendialog, data }) { 
  if (document.body.classList === "bodycontent") {
    document.body.classList.remove("bodycontent");
  }

  

  if (!data) {
    return <div style={{
      position: "absolute",
      top: "50%",
      left: "50%"
    }}>Yükleniyor</div>
  }
  console.log(data, "data aaaaaaa");

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
      <FeedbackDetailCard data={data} />
      <Comments />
      <AddComment />
    </div>
  );
}
