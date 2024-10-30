"use client"
import DetailFeedback from "@/components/detail-feedback-card"; 
import { useEffect, useState } from "react";

export default function DetailFeedbacks({ params }) {
  const [data, setData] = useState(null);

 


  return (
    <>
      <DetailFeedback data={data} />
    </>
  );
}
