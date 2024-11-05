"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Categories from "./category";
import Roadmap from "./roadmap";
import "./style.css";
import { MenuIcon } from "@/helpers/icons";
import HammburgerDialog from "../hamburgerdia/hamdialog";
import { getMe, logOut } from "@/utils/fetchBase";

export default function SideBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getMe();
      setUser(response);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logOut();
    setUser(null); // Kullanıcıyı sıfırla
  };

  return (
    <div className="sideBarContainer">
      <div className="sidebarHeader">
        {user ? (
          <>
            {user.firstName} <br />
            <button onClick={handleLogout}>Çıkış Yap</button>
          </>
        ) : (
          <Link href="/loginsignup">Giriş Yap</Link>
        )}

        <div className="sidebarHeaderContent">
          <h2>Frontend Mentor</h2>
          <p>Feedback Board</p>
        </div>
        <button className="menu">
          <MenuIcon />
        </button>
        <HammburgerDialog />
      </div>
      <Categories />
      <Roadmap />
    </div>
  );
}
