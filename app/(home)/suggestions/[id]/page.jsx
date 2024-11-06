"use client";
import DetailFeedback from "@/components/detail-feedback-card";
import Empty from "@/components/empty";
import { getDetailFeedbacks } from "@/utils/fetchBase";
import { useEffect, useState } from "react";

import "./style.css";

export default function DetailFeedbacks({ params }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { response, error } = await getDetailFeedbacks(params?.id);

      if (!error) {
        setData(response);
      }
    };

    fetchData();
  }, [params?.id]);

  return data ? <DetailFeedback data={data} params={params} /> : <Empty />;
}
