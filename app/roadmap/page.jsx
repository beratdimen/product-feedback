import RoadmapHeader from "@/components/roadmap-header";
import "./roadmap.css";
import ListRoadMap from "@/components/listroadmap";
import { getFeedback } from "@/utils/fetchBase";
import Planned from "@/components/planned";
import InProgress from "@/components/inprogress";
import Live from "@/components/live";

export default async function RoadMap() {
  const { response } = await getFeedback(0, 1, 100);
  console.log(
    response,
    "roadmap asdadasdasdasdasdasdasdasdasdasdadasdasdasdasdasd"
  );

  return (
    <div className="roadmapContent">
      <RoadmapHeader />
      <ListRoadMap data={response.feedbacks} />
      <div className="generalRoadmap">
        <Planned data={response.feedbacks} />
        <InProgress data={response.feedbacks} />
        <Live data={response.feedbacks} />
      </div>
    </div>
  );
}
