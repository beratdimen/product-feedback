import LikeBtn from "@/components/like-button"
import "./roaditem.css"
import { CommentsIcon } from "@/helpers/icons"

export default function RoadItem() {
  return (
    <div className="roaditem">
      <p className="roadType">Planned</p>
      <h2>More comprehensive reports</h2>
      <p>It would be great to see a more detailed breakdown of solutions.</p>
      <p className="tags">Feature</p>
      <div className="likesComments">
        <LikeBtn />
        <p>
        <CommentsIcon /> 8</p>
      </div> 
    </div >
  )
}