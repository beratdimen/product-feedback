import RoadItem from "./roaditem"
import "./roadmap.css"


export default function RoadMap(){
  return(
    <div className="roadCont">
      <div className="planned"> 
        <RoadItem />
      </div>
      <div className="In-Progress">

      </div>
      <div className="Live">

      </div>
    </div>
  )
}