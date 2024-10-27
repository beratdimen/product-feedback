import LikeBtn from "@/components/like-button";
import { CommentsIcon } from "@/helpers/icons";

export default function DetailFeedback(params){
  return(
    
    <div className="cardContainer">
    <div className="contentGeneral">
      <LikeBtn />
      <div className="content">
        <h3>Add tags for solutions</h3>
        <p>Easier to search for solutions based on a specific stack.</p>
        <span>Category</span>
      </div>
    </div>
    <p className="comments">
      <CommentsIcon /> 8
    </p>
  </div>
  )
}