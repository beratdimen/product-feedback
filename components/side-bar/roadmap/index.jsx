 
import Link from "next/link";

export default function Roadmap() {
  return (
    <div className="roadmapContainer">
      <div className="roadmapHeader">
        <h3>Roadmap</h3>
        <Link href={"/roadmap"}>View</Link>
      </div>
      <ul>
        <li className="planned">
          <span>●</span> Planned
        </li>
        <li className="inProgress">
          <span>●</span>In-Progress
        </li>
        <li className="live">
          <span>●</span>Live
        </li>
      </ul>
    </div>
  );
}
