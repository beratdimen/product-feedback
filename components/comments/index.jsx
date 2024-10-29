"use client"

import { AvatarIcon } from "@/helpers/icons";
import "./style.css";
import ReplyButton from "../reply-button";
import ReplyComments from "../reply-comments";
import { useState } from "react";
import Data from "/data.json";

export default function Comments() {

  const [replyShow, setReplyShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  console.log(Data);



  console.log(selectedIndex);

  return (
    <div className="commentsContainer">
      <div className="commentsGeneral">
        <h3>4 Comments</h3>

        {Data.map((x, i) =>
          <div className="commentsCard">
            <div className="content">
              <div className="userInformation">
                <div>
                  <AvatarIcon />
                  <div className="avatarInfo">
                    <h4>{x.firstName} {x.lastName}</h4>
                    <p>{x.userName}</p>
                  </div>
                </div>
                <ReplyButton setReplyShow={setReplyShow} replyShow={replyShow} setSelectedIndex={setSelectedIndex} i={x.id} />
              </div>

              <p>{x.comments}</p>
            </div>
            {selectedIndex === x.id && replyShow && <ReplyComments />}
          </div>
        )}


      </div>
    </div>
  );
}
