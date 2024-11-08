"use client";

import { useEffect, useState, useCallback } from "react";
import Header from "../header";
import SideBar from "../side-bar";
import Suggestions from "../suggestions";
import { getFeedback } from "@/utils/fetchBase";
import Empty from "../empty";

export default function SuggesstionLayout({ CategoryData }) {
  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(1);
  const [feedbackData, setFeedbackData] = useState({});
  const [active, setActive] = useState(false);

 

  //burda feedbackleri useEffect gibi değişkenler değiştiğinde çalışmasını istediğimiz zaman getirip bir tipi fonksiyon olan bir değişkene atıyoruz.
  const fetchData = useCallback(async () => {
    const { response, error } = await getFeedback(category, page, 4);

    if (!error) {
      setFeedbackData(response);
    } else {
      console.error(error);
    }
  }, [category, page,active]);

  //Burda ise her fetchdata dan gelen veri değiştikçe çalışmasını istediğimiz işlemleri useEffect içine yazıyoruz mesela burda ben her feedback değiştiğinde çalışmasını istediğim için yukarıda useCallback ile veriyi çektiğim fonksiyonu useEffect içine çağırdım yani kısaca şöyle getFeedback den gelen veri her değiştiğinde burası çalışıcak ve anlık olarak veri ekrana basılıcak 
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setPage(1);
  }, [category]);

  return (
    <>
      <SideBar
        feedbackData={feedbackData}
        setCategory={setCategory}
        CategoryData={CategoryData}
      />
      <div>
        <Header
          count={feedbackData?.totalItems}
          CategoryData={CategoryData}
          setFeedbackData={setFeedbackData}
          feedbackData={feedbackData}
          fetchData={fetchData} // fetchData fonksiyonunu Header'a geçiyoruz
        />

        {feedbackData?.totalItems === 0 ? (
          <Empty />
        ) : (
          <Suggestions feedbackData={feedbackData} setPage={setPage} page={page} setActive={setActive} active={active} />
        )}
      </div>
    </>
  );
}
