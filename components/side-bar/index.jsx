import Link from "next/link";
import Categories from "./category";
import Roadmap from "./roadmap";
import "./style.css";
export default function SideBar() {
  return (
    <div className="sideBarContainer">
      <div className="sidebarHeader">
        <Link href={"/loginsignup"}>Giriş Yap</Link>
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </div>
      <Categories />
      <Roadmap />
    </div>
  );
}
