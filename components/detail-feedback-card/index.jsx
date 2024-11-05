"use client";

import { RightIcon } from "@/helpers/icons";
import FeedbackCard from "../feedback-card";
import "./style.css";
import EditButton from "../edit-button";
import Comments from "../comments";
import AddComment from "../add-comment";
import Link from "next/link";
import ThemeSwitch from "../header/dark-mode-button";
import { useEffect, useState } from "react";
import { getDetailFeedbacks } from "@/utils/fetchBase";
export default function DetailFeedback({ opendialog, params }) {
  const [data, setData] = useState(null);

  if (document.body.classList === "bodycontent") {
    document.body.classList.remove("bodycontent");
  }
  console.log(params, "sadsadasdasd ");
  useEffect(() => {
    const fetchData = async () => {
      const detailData = await getDetailFeedbacks(params);

      setData(detailData);

      if (!detailData) {
        return notFound();
      }
    };
    fetchData();
    // console.log(detailData);
  }, [params]);

  return (
    <div className="detailContainer">
      <div className="detailHeader">
        <Link href={"/"}>
          <button className="backBtn">
            <RightIcon /> Go Back
          </button>
        </Link>
        <ThemeSwitch />
        <EditButton opendialog={opendialog} />
      </div>
      <FeedbackCard />
      <Comments />
      <AddComment />
    </div>
  );
}
