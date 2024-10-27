import AddButton from "../add-button";
import GoBack from "../goback";
import "./style.css";
export default function RoadmapHeader() {
  return (
    <div className="roadmapHeaderPage">
      <div className="road">
        <GoBack />
        <h4>Roadmap</h4>
      </div>
      <AddButton />
    </div>
  );
}
