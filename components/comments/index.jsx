import { AvatarIcon } from "@/helpers/icons";
import "./style.css";
import ReplyButton from "../reply-button";

export default function Comments() {
  return (
    <div className="commentsContainer">
      <div className="commentsGeneral">
        <h3>4 Comments</h3>

        <div className="commentsCard">
          <AvatarIcon />
          <div className="content">
            <div className="userInformation">
              <div>
                <h4>Firstname Lastname</h4>
                <p>Username</p>
              </div>
              <ReplyButton />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              aliquid vitae ea similique, id qui neque obcaecati numquam et
              molestiae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
