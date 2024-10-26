import { DownIcon } from "@/helpers/icons";
import "./style.css";

export default function SortByFilter() {
  return (
    <div className="filter">
      <span>Sort by : </span> <h6>Most Uptoves</h6> <DownIcon />
    </div>
  );
}
