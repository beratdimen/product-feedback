"use client"
 
import { useState } from "react"
import ListRoadItem from "../listroaditem/roaditem";
import "./listroad.css"

export default function ListRoadMap({data}) {
  const [selected, setSelected] = useState(null);
  
  const datalist = data.filter(x => x.status === selected);

  console.log(datalist, "asdşaçsüdasdsaüğdasdş");
  return (
    <div className="listRoadCont">
      <ul className="listRoadmap">
        <li onClick={() => setSelected(1)} style={{
          borderBottom: selected === 1 && "4px solid var(--plannedColor)",
          paddingBottom: "16.5px",
          color: selected === 1 && "rgba(58, 67, 116, 1)"
        }}>Planned {`(${data.filter(x => x.status === 1).length})`}</li>
        <li onClick={() => setSelected(2)} style={{
          borderBottom: selected === 2 && "4px solid var(--inProgreessColor)",
          paddingBottom: "16.5px",
          color: selected === 2 && "rgba(58, 67, 116, 1)"
        }}>In-Progres {`(${data.filter(x => x.status === 2).length})`}</li>
        <li onClick={() => setSelected(3)} style={{
          borderBottom: selected === 3 && "4px solid var(--liveColor)",
          paddingBottom: "16.5px",
          color: selected === 3 && "rgba(58, 67, 116, 1)"
        }}>Live  {`(${data.filter(x => x.status === 3).length})`}</li>
      </ul>
      <div className="showRoad">
      {datalist.length ? datalist.map((x, i) => <ListRoadItem key={i} {...x}  selected={selected} />) : <><h4 className="notfoundfeedback">feedback not found</h4></>} 
      </div>
    </div>
  )
}