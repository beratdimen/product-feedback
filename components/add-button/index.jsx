"use client";
import { RightIcon } from "@/helpers/icons";
import "./style.css";
import { useRef, useState } from "react";
import ButtonGroup from "../create-btn-group";

export default function AddButton() {
  const [open, setOpen] = useState(false);
  const newFeedback = useRef();

  const openDialog = () => {
    setOpen(true);
    if (newFeedback.current) {
      newFeedback.current.close();
    }
  };

  const closeDialog = () => {
    setOpen(false);
    if (newFeedback.current) {
      newFeedback.current.close();
    }
  };

  return (
    <>
      <div className="headerBtn">
        <button onClick={openDialog}>+ Add Feedback</button>
      </div>
      <dialog ref={newFeedback} open={open}>
        <div className="dialogContainer">
          <button onClick={closeDialog}>
            <RightIcon /> Go Back
          </button>
          <h2>Create New Feedback</h2>
          <form>
            <label>Feedback title</label>
            <input type="text" />

            <label>Category</label>
            <select>
              <option value=""></option>
              <option value="">Feature</option>
              <option value="">UI</option>
              <option value="">UX</option>
              <option value="">Bug</option>
            </select>

            <label>Feedback detais</label>
            <input type="text" />
            <ButtonGroup />
          </form>
        </div>
      </dialog>
    </>
  );
}
