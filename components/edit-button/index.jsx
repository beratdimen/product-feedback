"use client";
import { useRef, useState } from "react";
import EditFeedback from "../edit-modal";
import "./style.css";
export default function EditButton({ data, params }) {
  const editFeedback = useRef();

  function handleClick() {
    if (editFeedback.current) {
      editFeedback.current.showModal();
    }
  }

  function close() {
    if (editFeedback.current) {
      editFeedback.current.close();
    }
  }

  return (
    <div className="EditBtn">
      <button onClick={handleClick}>Edit Feedback</button>
      <EditFeedback
        opendialog={handleClick}
        editFeedback={editFeedback}
        close={close}
        data={data}
        params={params}
      />
    </div>
  );
}
