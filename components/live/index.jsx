"use client"
import RoadItem from "@/app/roadmap/roaditem";

export default function Live({ data = [] }) {
 

  return (
    <div className="live">
      <div className="roadItemHeader">
        <h6>Live({data.filter(x => x.status === 3).length})</h6>
        <span>Released features</span>
      </div>
      {data.length > 0 ?
        data.filter(x => x.status === 3).map((x, i) => <RoadItem key={i} {...x} />) :
        <h4 className="notfoundfeedback">Feedback not found</h4>
      }
    </div>
  )
}