"use client"
import RoadItem from "@/app/roadmap/roaditem";

export default function InProgress({ data }) {

  const datalist = data.filter(x => x.status === 2);

  console.log(datalist, "asdşaçsüdasdsaüğdasdş");


  return (
    <div className="inprogress">
      <div className="roadItemHeader">
        <h6>Inprogress({datalist.length})</h6>
        <span>Currently being developed</span>
      </div>
      {datalist.length ? datalist.map((x, i) => <RoadItem key={i} {...x} />) : <><h4 className="notfoundfeedback">feedback not found</h4></>
      }
    </div>
  )
}