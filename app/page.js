import DetailFeedback from "@/components/detail-feedback-card";
import Empty from "@/components/empty";
import FeedbackCard from "@/components/feedback-card";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <FeedbackCard />
      <Empty />
      <DetailFeedback />
    </div>
  );
}
