import { BulbIcon } from "@/helpers/icons";
import "./style.css";
import SortByFilter from "../sort-by-filter";
import AddButton from "../addButton";
export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerPiece">
        <div className="logo">
          <BulbIcon />
          <h4>6 Suggestions</h4>
        </div>
        <SortByFilter />
      </div>
      <AddButton />
    </div>
  );
}
