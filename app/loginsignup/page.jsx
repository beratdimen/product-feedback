"use client"

import Login from "@/components/login/login";
import "./loginsignup.css"
import { useState } from "react"
import SignUp from "@/components/signup/signup";
import Image from "next/image";
export default function LoginSignUp() {
  const [sign, setSign] = useState("login");
  return (
    <>

      <div className="loginsignup">
        <Login setSign={setSign} sign={sign} />
        <SignUp setSign={setSign} sign={sign} />
      </div>

      <Image src={"/img/anş.gif"} width={150} height={150} />
    </>
  )
}