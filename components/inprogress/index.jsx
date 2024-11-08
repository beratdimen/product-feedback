"use client"
import RoadItem from "@/app/roadmap/roaditem";

export default function InProgress({ data = [] }) {

 

  return (
    <div className="inprogress">
      <div className="roadItemHeader">
        <h6>Inprogress({data.filter(x => x.status === 2).length})</h6>
        <span>Currently being developed</span>
      </div>
      {data.length > 0 ?
        data.filter(x => x.status === 2).map((x, i) => <RoadItem key={i} {...x} />) :
        <h4 className="notfoundfeedback">Feedback not found</h4>
      }
    </div>
  )
}