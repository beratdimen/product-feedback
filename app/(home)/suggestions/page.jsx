import FeedbackCard from "@/components/feedback-card";
import "./style.css";
import { getFeedback } from "@/utils/fetchBase";
export default async function SuggestionsPage() {
  const { response, error } = await getFeedback();
  console.log({ response });
  console.log({ error });

  return (
    <div className="gg">
      <FeedbackCard />
      {/* {response.posts.map((x, index) => (
        <p key={index}>{x.title}</p>
      ))} */}
    </div>
  );
}
