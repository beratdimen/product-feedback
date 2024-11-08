"use client";

import Link from "next/link";

export default function Roadmap({ roadCount = [] }) {

  return (
    <div className="roadmapContainer">
      <div className="roadmapHeader">
        <h3>Roadmap</h3>
        <Link href={"/roadmap"}>View</Link>
      </div>
      <ul>
         <li className="planned">
          <p><span>●</span> Planned</p>
          <span>{roadCount[0]?.count}</span>
        </li>
        <li className="inProgress">
          <p><span>●</span> In-Progress</p>
          <span>{roadCount[1]?.count}</span>
        </li>
        <li className="live">
          <p><span>●</span> Live</p>
          <span>{roadCount[2]?.count}</span>
        </li> 

      </ul>
    </div>
  );
}
