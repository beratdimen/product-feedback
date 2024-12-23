"use client";

import { RightIcon } from "@/helpers/icons";
import "./style.css";
import EditButton from "../edit-button";
import Comments from "../comments";
import AddComment from "../add-comment";
import Link from "next/link";
import ThemeSwitch from "../header/dark-mode-button";

import FeedbackDetailCard from "../feedback-detail-card";

export default function DetailFeedback({
  opendialog,
  params,
  data,
  categoryList,
  active,
  setActive,
}) {
  return (
    <div className="detailContainer">
      <div className="detailHeader">
        <Link href={"/"}>
          <button className="backBtn">
            <RightIcon /> Go Back
          </button>
        </Link>
        <ThemeSwitch />
        <EditButton
          opendialog={opendialog}
          data={data}
          params={params}
          categoryList={categoryList}
        />
      </div>
      <FeedbackDetailCard data={data} setActive={setActive} />
      <Comments feedbackId={params?.id} active={active} setActive={setActive} />
      <AddComment
        feedbackId={params?.id}
        setActive={setActive}
        active={active}
      />
    </div>
  );
}
