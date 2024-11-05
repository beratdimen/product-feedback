import Link from "next/link";
import Categories from "./category";
import Roadmap from "./roadmap";
import "./style.css";
import { CancelBtn, CloseIcon, MenuIcon } from "@/helpers/icons";
import HammburgerDialog from "../hamburgerdia/hamdialog";
import { getMe, getUsers, logOut } from "@/utils/fetchBase";
export default async function SideBar() {
  const response = await getMe();
  console.log(response);

  return (
    <div className="sideBarContainer">
      <div className="sidebarHeader">
        {
          response ? <>
            {response?.firstName} <br />   
          </> : <Link href={"/loginsignup"}>Giriş Yap</Link>
        }

        <div className="sidebarHeaderContent">
          <h2>Frontend Mentor</h2>
          <p>Feedback Board</p>
        </div>
        <button>
          <MenuIcon />
        </button>
        <HammburgerDialog />
      </div>
      <Categories />
      <Roadmap />
    </div>
  );
}
