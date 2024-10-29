

import RoadmapHeader from "@/components/roadmap-header";
import RoadItem from "./roaditem";
import "./roadmap.css";
import ListRoadMap from "@/components/listroadmap";

export default function RoadMap() {
  return (
    <div className="roadCont">
      <RoadmapHeader />
      <ListRoadMap />
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
