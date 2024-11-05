"use client";

import Login from "@/components/login/login";
import "./loginsignup.css";
import { useState } from "react";
import SignUp from "@/components/signup/signup";
import Image from "next/image";
export default function LoginSignUp() {
  const [sign, setSign] = useState("login");

  if (document.body.classList === "bodycontent") {
    document.body.classList.remove("bodycontent");
  }
  return (
    <div className="loginCont">
      <div className="loginsignup">
        <Login setSign={setSign} sign={sign} />
        <SignUp setSign={setSign} sign={sign} />
      </div>
      <Image alt="" src={"/img/login.png"} width={500} height={500} />
    </div>
  );
}
