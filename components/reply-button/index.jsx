"use client";
import "./style.css";

export default function ReplyButton({
  setReplyShow,
  replyShow,
  setSelectedIndex,
  i,
}) {
  return (
    <div className="replyBtn">
      <button
        onClick={() => {
          setReplyShow(!replyShow);
          setSelectedIndex(i);
        }}
      >
        Reply
      </button>
    </div>
  );
}
