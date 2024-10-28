import Link from "next/link";
import Categories from "./category";
import Roadmap from "./roadmap";
import "./style.css";
import { CancelBtn, CloseIcon, MenuIcon } from "@/helpers/icons";
export default function SideBar() {
  return (
    <div className="sideBarContainer">
      <div className="sidebarHeader">
        <Link href={"/loginsignup"}>Giriş Yap</Link>
        <div className="sidebarHeaderContent">
          <h2>Frontend Mentor</h2>
          <p>Feedback Board</p>
        </div>
        <button>
          <MenuIcon />
        </button>
        <button>
          <CancelBtn />
        </button>
      </div>
      <Categories />
      <Roadmap />
    </div>
  );
}
