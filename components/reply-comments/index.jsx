"use client";
import "./reply.css";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ReplyComments() {
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
    <div className="replyCommentContainer"> 
      <form>
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="type your comment here"
        ></textarea> 
          <button disabled={remainigChar < 0}>Post Reply</button> 
      </form>
    </div>
  );
}
