"use client";
import { createComment } from "@/utils/fetchBase";
import "./style.css";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { postComments } from "@/action/actions";

export default function AddComment({ feedbackId }) {
  const [text, setText] = useState("");
  const MAX_CHAR = 250;
  const [remainigChar, setRemaningChar] = useState(250);

  useEffect(() => {
    setRemaningChar(MAX_CHAR - text.length);

    if (remainigChar <= 0) {
      toast.error("250 karaktaerden fazla");
    }
  }, [text]);
 

  return (
    <div className="addCommentContainer">
      <h4>Add Comment</h4>
      <form action={postComments}>
        <textarea
          name="content"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="type your comment here"
        ></textarea>
        <input type="hidden" name="feedbackid" value={feedbackId}/>
        <div className="commentFooter">
          <span>{remainigChar} karakter hakkın kaldı</span>
          <button disabled={remainigChar < 0}>Post Comment</button>
        </div>
      </form>
    </div>
  );
}
