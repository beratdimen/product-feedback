"use client"
import RoadItem from "@/app/roadmap/roaditem";

export default function Planned({ data = [] }) { 

  console.log(data  ,"data asdüaçsdasüğdçağüdçadçğasdçasüğdasüğdaüğdçaüğsçdasd");
  


  return (
    <div className="planned">
      <div className="roadItemHeader">
        <h6>Planned({data.filter(x => x.status === 1).length})</h6>
        <span>Currently being developed</span>
      </div>
      {data.length > 0 ? 
        data.filter(x => x.status === 1).map((x, i) => <RoadItem key={i} {...x} />) : 
        <h4 className="notfoundfeedback">Feedback not found</h4>
      }
    </div>
  );
}
