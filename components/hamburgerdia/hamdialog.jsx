"use client";

import { MenuIcon } from "@/helpers/icons";
import Categories from "../side-bar/category";
import Roadmap from "../side-bar/roadmap";
import "./hamdialog.css";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
export default function HammburgerDialog({ setCategory, CategoryData, feedbackData, handleLogout, user }) {
  const hamburgerRef = useRef();

  function handleClick() {
    if (hamburgerRef.current) {
      hamburgerRef.current.showModal();
    }
  }

  function close() {
    if (hamburgerRef.current) {
      hamburgerRef.current.close();
    }
  }

  return (
    <div className="hamdialogCont">
      <button onClick={handleClick}>
        <Image src={"/img/hamburger.png"} alt="" width={20} height={17} />
      </button>
      <dialog ref={(e) => (hamburgerRef.current = e)}>
        <div className="hamburgerdiaCont">
          <div className="sidebarDiaHeader">
            <div className="sidebarHeaderContent">
              <h2>Frontend Mentor</h2>
              <p>Feedback Board</p>
            </div>
            <button onClick={close}>
              <Image src={"/img/cancel.png"} alt="" width={20} height={17} />
            </button>
          </div>
          <div className="hammenu">

            <div className="userContHamburger">
              {user?.data ? (
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


            <Categories setCategory={setCategory} CategoryData={CategoryData} />
            <Roadmap feedbackData={feedbackData} />
          </div>
        </div>
      </dialog>
    </div>
  );
}
