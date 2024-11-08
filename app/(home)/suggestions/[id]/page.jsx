"use client";
import DetailFeedback from "@/components/detail-feedback-card";
import Empty from "@/components/empty";
import { getCategory, getDetailFeedbacks } from "@/utils/fetchBase";
import { useEffect, useState } from "react";

import "./style.css";

export default function DetailFeedbacks({ params  }) {
  const [data, setData] = useState({});
  const [categoryList, setcategoryList] = useState([]);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { response, error } = await getDetailFeedbacks(params?.id);

      if (!error) {
        setData(response);
      }

      const responseCategory = await getCategory();
      setcategoryList(responseCategory);
    };

    fetchData();

  }, [params?.id, active]);

  return data ? <DetailFeedback categoryList={categoryList} data={data} params={params} active={active} setActive={setActive} /> : <Empty />;
}
