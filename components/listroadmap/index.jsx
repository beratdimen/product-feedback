"use client"
 
import { useState } from "react"
import ListRoadItem from "../listroaditem/roaditem";
import "./listroad.css"

export default function ListRoadMap() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="listRoadCont">
      <ul className="listRoadmap">
        <li onClick={() => setSelected(1)} style={{
          borderBottom: selected === 1 && "4px solid var(--plannedColor)",
          paddingBottom: "16.5px",
          color: selected === 1 && "rgba(58, 67, 116, 1)"
        }}>Planned {"(1)"}</li>
        <li onClick={() => setSelected(2)} style={{
          borderBottom: selected === 2 && "4px solid var(--inProgreessColor)",
          paddingBottom: "16.5px",
          color: selected === 2 && "rgba(58, 67, 116, 1)"
        }}>In-Progres {"(1)"}</li>
        <li onClick={() => setSelected(3)} style={{
          borderBottom: selected === 3 && "4px solid var(--liveColor)",
          paddingBottom: "16.5px",
          color: selected === 3 && "rgba(58, 67, 116, 1)"
        }}>Live {"(1)"}</li>
      </ul>
      <div className="showRoad">
          <ListRoadItem selected={selected}/>
      </div>
    </div>
  )
}