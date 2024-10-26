"use client";
import { useRef, useState } from "react";
import EditFeedback from "../edit-modal";
import "./style.css";
export default function EditButton() {
  const [open, setOpen] = useState(false);
  const editFeedback = useRef();

  const openDialog = () => {
    setOpen(true);
    if (editFeedback.current) {
      editFeedback.current.close();
    }
  };

  const closeDialog = () => {
    setOpen(false);
    if (editFeedback.current) {
      editFeedback.current.close();
    }
  };

  return (
    <div className="EditBtn">
      <button onClick={openDialog}>Edit Feedback</button>
      <EditFeedback
        open={open}
        editFeedback={editFeedback}
        closeDialog={closeDialog}
      />
    </div>
  );
}
