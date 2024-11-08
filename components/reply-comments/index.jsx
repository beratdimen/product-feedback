"use client";
import { postReplyComments } from "@/action/actions";
import "./reply.css";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ReplyComments({ feedbackId, id, setActive, active }) {
  const [text, setText] = useState("");
  const MAX_CHAR = 250;
  const [remainigChar, setRemaningChar] = useState(250);
  console.log(id, "parentid");


  useEffect(() => {
    setRemaningChar(MAX_CHAR - text.length);

    if (remainigChar <= 0) {
      toast.error("250 karaktaerden fazla");
    }
  }, [text]);

  return (
    <div className="replyCommentContainer">
      <form action={postReplyComments}>
        <textarea
          name="content"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="type your comment here"
        ></textarea>
        <input type="hidden" name="feedbackid" value={feedbackId} />
        <input type="hidden" name="parentid" value={id} />
        <button disabled={remainigChar < 0} onClick={() => setActive(!active)}>Post Reply</button>
      </form>
    </div>
  );
}
