 
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
          <p><span>●</span> Planned</p>
          <span>1</span>
        </li>
        <li className="inProgress">
          <p><span>●</span>In-Progress</p>
          <span>1</span>
          </li>
        <li className="live">
          <p><span>●</span>Live</p>
          <span>1</span>
          </li>
      </ul>
    </div>
  );
}
