"use client";

import { AvatarIcon } from "@/helpers/icons";
import "./style.css";
import ReplyButton from "../reply-button";
import ReplyComments from "../reply-comments";
import { useEffect, useState } from "react";
import Data from "/data.json";
import { getComments } from "@/utils/fetchBase";

export default function Comments({ feedbackId }) {
  const [comments, setComments] = useState([]);
  const [replyShow, setReplyShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      const response = await getComments(feedbackId);
      const data = await response.json();
      setComments(data);
    }

    if (feedbackId) {
      fetchComments();
    }
  }, [feedbackId]);
  console.log(selectedIndex);
  console.log(comments, "commetsss");
  return (
    <div className="commentsContainer">
      <div className="commentsGeneral">
        <h3>{comments.length}</h3>

        {comments.map((x, i) => (
          <div className="commentsCard" key={i}>
            <div className="content">
              <div className="userInformation">
                <div>
                  <AvatarIcon />
                  <div className="avatarInfo">
                    <h4>
                      {x.userName} {x.lastName}
                    </h4>
                    <p>{x.userName}</p>
                  </div>
                </div>
                <ReplyButton
                  setReplyShow={setReplyShow}
                  replyShow={replyShow}
                  setSelectedIndex={setSelectedIndex}
                  i={x.id}
                />
              </div>

              <p>{x.content}</p>
            </div>
            {selectedIndex === x.id && replyShow && <ReplyComments />}
          </div>
        ))}
      </div>
    </div>
  );
}
