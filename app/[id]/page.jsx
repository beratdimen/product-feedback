import DetailFeedback from "@/components/detail-feedback-card";
import { notFound } from "next/navigation";
 
export default function DetailFeedbacks({params}) {
  console.log(params.id);
  
  if(params.id !== "1"){
    return notFound();
  }

  return (
    <DetailFeedback />
  )
}