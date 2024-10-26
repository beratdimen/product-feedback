import { BulbIcon } from "@/helpers/icons";
import "./style.css";
import SortByFilter from "../sort-by-filter";
import AddButton from "../add-button";
import ThemeSwitch from "./dark-mode-button";
export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerPiece">
        <div className="logo">
          <BulbIcon />
          <h4>6 Suggestions</h4>
        </div>
        <SortByFilter />
        <ThemeSwitch />
      </div>
      <AddButton />
    </div>
  );
}
