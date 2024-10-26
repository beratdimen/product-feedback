import { useRef, useState } from "react";
import ButtonGroup from "../create-btn-group";
import { RightIcon } from "@/helpers/icons";

export default function EditFeedback({ editFeedback, open, closeDialog }) {
  return (
    <dialog ref={editFeedback} open={open}>
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

          <div>
            <button>delete</button>
            <ButtonGroup />
          </div>
        </form>
      </div>
    </dialog>
  );
}
