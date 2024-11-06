"use client"
import RoadItem from "@/app/roadmap/roaditem";

export default function Live({ data }) {

  const datalist = data.filter(x => x.status === 3);

  console.log(datalist, "asdşaçsüdasdsaüğdasdş");


  return (
    <div className="live">
      <div className="roadItemHeader">
        <h6>Live({datalist.length})</h6>
        <span>Released features</span>
      </div>
      {datalist.length ? datalist.map((x, i) => <RoadItem key={i} {...x} />) : <><h4 className="notfoundfeedback">feedback not found</h4></>
      }
    </div>
  )
}