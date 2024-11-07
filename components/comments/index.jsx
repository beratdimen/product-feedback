"use client";

import { AvatarIcon } from "@/helpers/icons";
import "./style.css";
import ReplyButton from "../reply-button";
import ReplyComments from "../reply-comments";
import { useEffect, useState } from "react";
import { getComments } from "@/utils/fetchBase";
import Image from "next/image";

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
    setFilterComments(comments.filter(x => x.parentId === null));

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
  console.log(filtercomments.filter((fc) => comments.some(c => c.parentId === fc.id)));

  // `filtercomments` içindeki tüm id değerlerini yazdırır
  console.log(filtercomments.map((x) => x.id));

  // `comments` içindeki tüm parentId değerlerini yazdırır
  console.log(comments.map((x) => x.parentId));

  console.log(filtercomments, "fltercomments asdasd");


  return (
    <div className="commentsContainer">
      <div className="commentsGeneral">
        <h3>{comments.length} Comments</h3>
        {filtercomments.map((x, i) => (
          <div key={i}>
            <div className="commentsCard" >
              <div className="content">
                <img src={x.avatar} height={40} width={40} alt="asdasd" />
                <div className="userInformation">
                  <div className="avatarInfo">
                    <h4>{x.firstName} {x.lastName}</h4>
                    <h5>@{x.nickname}</h5>
                    <p>{formatTime(x.createdTime)}</p>
                  </div>

                  <p>{x.content}</p>
                </div>
              </div><ReplyButton
                setReplyShow={setReplyShow}
                replyShow={replyShow}
                setSelectedIndex={setSelectedIndex}
                i={x.id}
              />
            </div>
            {selectedIndex === x.id && replyShow && <ReplyComments id={selectedIndex} feedbackId={feedbackId} />}

            {comments.filter((c) => c.parentId === x.id) // `filter` ile yalnızca ilgili `parentId`ye sahip yorumları alıyoruz
              .map((reply) => ( // `map` ile her alt yorumu render ediyoruz
                <div className="replyCommentCard" key={reply.id} >
                  <div className="content">
                    <img src={reply.avatar} height={40} width={40} alt="asdasd" />
                    <div className="userInformation">
                      <div className="avatarInfo">
                        <h4>{reply.firstName} {reply.lastName}</h4>
                        <h5>@{reply.nickname}</h5>
                        <p>{formatTime(reply.createdTime)}</p>
                      </div>
                      <p><span>@{x.nickname}</span> {reply.content}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
