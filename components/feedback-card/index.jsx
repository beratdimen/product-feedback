import { CommentsIcon } from "@/helpers/icons";
import "./style.css";
import LikeBtn from "../like-button";
import Link from "next/link";

export default function FeedbackCard({ id, title, detail, commentCount, upvoteCount, name, status, active, setActive }) {
  console.log(status, "feeedbakcasasdadasdsad");
  
  return (
    <div className={`${status === 0 ? "suggestionfeedback" : status === 1 ? "plannedfeedback" : status === 2 ? "Inprogressfeedback" : status === 3 ? "livefeedback" : ""} cardContainer`}  >
      <LikeBtn upvoteCount={upvoteCount} id={id} setActive={setActive} active={active} />
      <div className="contentGeneral" >
        <Link href={"/suggestions/" + id} >
          <div className="content">
            <h3>{title}</h3>
            <p>{detail}</p>
            <span>{name}</span>
          </div>
        </Link>
      </div>
      <p className="comments">
        <CommentsIcon /> {commentCount}
      </p>
    </div>
  );
}
