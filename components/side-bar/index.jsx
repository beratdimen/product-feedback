"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Categories from "./category";
import Roadmap from "./roadmap";
import "./style.css";
import { MenuIcon } from "@/helpers/icons";
import HammburgerDialog from "../hamburgerdia/hamdialog";
import { getMe, getroadmapCount, logOut } from "@/utils/fetchBase";

export default function SideBar({ setCategory, CategoryData, feedbackData }) {
  const [user, setUser] = useState({});
  const [roadCount, setRoadCount] = useState([]);

  console.log(typeof CategoryData);



  useEffect(() => {
    const fetchUser = async () => {
      const response = await getMe();

      setUser(response);
    };
    const fetchRoadmap = async () => {
      const { data } = await getroadmapCount();

      setRoadCount(data || []);
    };
    fetchRoadmap();
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logOut();
    setUser({});
  };

  useEffect(() => {
    console.log("user :>> ", user);
    console.log("roadCount :>> ", roadCount);
  }, [user, roadCount]);

  return (
    <div className="sideBarContainer">
      <div className="sidebarHeader">
        <div className="userCont"> {user?.data ? (
          <>
            <div className="userInfo">
              {user?.data?.firstName}
            </div> <br />
            <button onClick={handleLogout}>Çıkış Yap</button>
          </>
        ) : (
          <Link href="/login">Giriş Yap</Link>
        )}
        </div>

        <div className="sidebarHeaderContent">
          <h2>Frontend Mentor</h2>
          <p>Feedback Board</p>
        </div>
        <button className="menu">
          <MenuIcon />
        </button>
        <HammburgerDialog user={user} handleLogout={handleLogout} feedbackData={feedbackData} setCategory={setCategory} CategoryData={CategoryData} />
      </div>
      <Categories setCategory={setCategory} CategoryData={CategoryData} />
      <Roadmap feedbackData={feedbackData} roadCount={roadCount} />
    </div>
  );
}
