import RoadmapHeader from "@/components/roadmap-header";
import RoadItem from "./roaditem";
import "./roadmap.css";

export default function RoadMap() {
  return (
    <div className="roadCont">
      <RoadmapHeader />

      <div className="generalRoadmap">
        <div className="planned">
          <RoadItem />
        </div>
        <div className="In-Progress">
          <RoadItem />
        </div>
        <div className="Live">
          <RoadItem />
        </div>
      </div>
    </div>
  );
}
