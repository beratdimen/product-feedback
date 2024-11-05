"use client"
import DetailFeedback from "@/components/detail-feedback-card";
import { getDetailFeedbacks } from "@/utils/fetchBase";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailFeedbacks({ params }) {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const { response } = await getDetailFeedbacks(params.id);

      setData(response);

      if (!response) {
        return notFound();
      }
    };
    fetchData();
  }, [params]);


  console.log(data, "asdasdasdasdasdasdsadasdasdasdasdasdassssssssssssssssaaaaaaaaaaaaaaasssssssssssssssdddddddddddd");

 
  return (
    <>
      <DetailFeedback data={data} />
    </>
  );
}
