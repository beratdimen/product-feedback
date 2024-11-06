"use client"
import RoadItem from "@/app/roadmap/roaditem";

export default function Planned({ data }) {

  const datalist = data.filter(x => x.status === 1);

  console.log(datalist, "asdşaçsüdasdsaüğdasdş");


  return (
    <div className="planned">
      <div className="roadItemHeader">
        <h6>Planned({datalist.length})</h6>
        <span>Currently being developed</span>
      </div>
      {datalist.length ? datalist.map((x, i) => <RoadItem key={i} {...x} />) : <><h4 className="notfoundfeedback">feedback not found</h4></>
      }
    </div>
  )
}