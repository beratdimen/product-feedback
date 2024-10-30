import DetailFeedback from "@/components/detail-feedback-card";
import { getDetailFeedbacks } from "@/utils/fetchBase";
import { notFound } from "next/navigation";

export default function DetailFeedbacks({ params }) {
  // if(params.id !== "1"){
  //   return notFound();
  // }

  return <DetailFeedback params={params.id} />;
}
