"use client";

import { useEffect, useState } from "react";
import Header from "../header";
import SideBar from "../side-bar";
import Suggestions from "../suggestions";
import { getFeedback } from "@/utils/fetchBase";
import Empty from "../empty";

export default function SuggesstionLayout({CategoryData}) {
  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(1);
  const [feedbackData, setFeedbackData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const { response, error } = await getFeedback(category, page, 4);

      if (!error) {
        setFeedbackData(response);
      } else {
        console.error(error);
      }
    }

    fetchData();
  }, [category, page]);

  useEffect(() => {
    setPage(1);
  }, [category]);
 

  return (
    <>
      <SideBar  feedbackData={feedbackData} setCategory={setCategory}  CategoryData={CategoryData} />
      <div>
        <Header count={feedbackData?.totalItems} CategoryData={CategoryData} setFeedbackData={setFeedbackData}  feedbackData={feedbackData} />

        {feedbackData?.totalItems === 0 ? (
          <Empty />
        ) : (
          <Suggestions
            feedbackData={feedbackData}
            setPage={setPage}
            page={page}
          />
        )}
      </div>
    </>
  );
}
