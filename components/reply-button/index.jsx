"use client";
import "./style.css";

export default function ReplyButton({
  setReplyShow,
  replyShow,
  setSelectedIndex,
  i, 
}) {
  return (
    <button
      onClick={() => {
        setReplyShow(!replyShow);
        setSelectedIndex(i);
      }}
    >
      Reply
    </button>
  );
}
