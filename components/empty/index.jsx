import Image from "next/image";
import "./style.css";
import AddButton from "../add-button";

export default function Empty() {
  return (
    <div className="emptyContainer">
      <div className="emptyGeneral">
        <Image src={"/img/empty.png"} width={130} height={130} />
        <div className="content">
          <h3>There is no feedback yet.</h3>
          <p>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
        <AddButton />
      </div>
    </div>
  );
}
