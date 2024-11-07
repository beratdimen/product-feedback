"use client";

import { AvatarIcon } from "@/helpers/icons";
import "./style.css";
import ReplyButton from "../reply-button";
import ReplyComments from "../reply-comments";
import { useEffect, useState } from "react";
import { getComments } from "@/utils/fetchBase";

export default function Comments({ feedbackId }) {
  const [comments, setComments] = useState([]);
  const [filtercomments, setFilterComments] = useState([]);
  const [replyShow, setReplyShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      const response = await getComments(feedbackId);
      console.log(response);
      if (!response.error) {
        setComments(response?.data);
      }
    }

    fetchComments();
  }, [feedbackId]);

  useEffect(() => {
    setFilterComments(comments.filter((x) => x.parentId === null));
  }, [comments]);

  console.log(comments, "comments");
  console.log(feedbackId, "feedbackId");

  function formatTime(createdTime) {
    const commentDate = new Date(createdTime); // kanka burada createdTime a göre  yeni tarih oluşturuyor tarih yapıyor yani Date fonksiyonu ile
    const now = new Date(); // buradada şu an ki zamanı alıyor date güncel bulunduğumuz tarih
    const difference = now - commentDate; // burdada şimki zaman ile yorum zamanı arasındaki zaman hesaplanıyor
    const diffInDays = Math.floor(difference / (1000 * 60 * 60 * 24)); // burada da ms yi güne dönüştürme işlemi yapııtık math florda yuvarlama iin kullanıldı

    if (diffInDays < 1) {
      const diffInHours = Math.floor(difference / (1000 * 60 * 60)); // 1 günden azsa yapılan yorum
      return diffInHours < 1 ? "Az önce" : `${diffInHours} saat önce`; // çıktısı da burda 1 saatden azsa az önce değilse kaç saat se onda önce gibi
    } else if (diffInDays < 7) {
      return `${diffInDays} gün önce`;
      // 7 günden azsa şu kadar gün önce yazsın
    } else {
      return commentDate.toLocaleDateString("tr-TR");
      // değilse eğer normal 10.12.2024 gibi yazsın
    }
  }
  // `filtercomments` öğelerinin `id` değerlerinin `comments` içinde `parentId` olarak eşleşip eşleşmediğini kontrol eder
  console.log(
    filtercomments.filter((fc) => comments.some((c) => c.parentId === fc.id))
  );

  // `filtercomments` içindeki tüm id değerlerini yazdırır
  console.log(filtercomments.map((x) => x.id));

  // `comments` içindeki tüm parentId değerlerini yazdırır
  console.log(comments.map((x) => x.parentId));

  return (
    <div className="commentsContainer">
      {filtercomments.content ? (
        <div className="commentsGeneral">
          <h3>{comments.length} Comments</h3>
          {filtercomments.map((x, i) => (
            <div key={i}>
              <div className="commentsCard">
                <div className="content">
                  <div className="userInformation">
                    <div>
                      <AvatarIcon />
                      <div className="avatarInfo">
                        <h4>{x.userName}</h4>
                        <p>{formatTime(x.createdTime)}</p>
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
                {selectedIndex === x.id && replyShow && (
                  <ReplyComments id={selectedIndex} feedbackId={feedbackId} />
                )}
              </div>

              {comments
                .filter((c) => c.parentId === x.id) // `filter` ile yalnızca ilgili `parentId`ye sahip yorumları alıyoruz
                .map(
                  (
                    reply // `map` ile her alt yorumu render ediyoruz
                  ) => (
                    <div className="replyCommentCard" key={reply.id}>
                      <div className="content">
                        <div className="userInformation">
                          <div>
                            <AvatarIcon />
                            <div className="avatarInfo">
                              <h4>{reply.userName}</h4>
                              <p>{formatTime(reply.createdTime)}</p>
                            </div>
                          </div>
                          <ReplyButton
                            setReplyShow={setReplyShow}
                            replyShow={replyShow}
                            setSelectedIndex={setSelectedIndex}
                            i={reply.id}
                          />
                        </div>
                        <p>
                          <span>@{x.userName}</span>
                          {reply.content}
                        </p>
                      </div>
                      {selectedIndex === reply.id && replyShow && (
                        <ReplyComments
                          id={selectedIndex}
                          feedbackId={feedbackId}
                        />
                      )}
                    </div>
                  )
                )}
            </div>
          ))}
        </div>
      ) : (
        <p>Yorum Yoktur</p>
      )}
    </div>
  );
}
