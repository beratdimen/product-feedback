import Categories from "./category";
import Roadmap from "./roadmap";
import "./style.css";
export default function SideBar() {
  return (
    <div className="sideBarContainer">
      <div className="sidebarHeader">
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </div>
      <Categories />
      <Roadmap />
    </div>
  );
}
