"use client"

import { authLogin } from "@/utils/fetchBase";
import "./login.css";
import { useState } from "react";
import Image from "next/image";

export default function Login({ setSign, sign }) {

  const [eyes, setEyes] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const formObj = Object.fromEntries(new FormData(e.target));
    console.log(formObj);

    try {
      if (formObj) {
        const response = await authLogin(formObj);
        console.log(response, "asdasdasds");
      }

    } catch (error) {
      console.error("Kayıt hatası:", error);
    }
  }


  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Giriş Yap</h1>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="E-Posta Giriniz..."
          />
        </label>
        <label htmlFor="password" className="passwordlabel">
          <input
            type={eyes ? "text" : "password"}
            name="password"
            placeholder={eyes ? "Şifre Giriniz..." : "********"}
            required
          />
          <p onClick={() => setEyes(!eyes)}>{eyes ? <Image src={"/img/eye-off.png"} width={30} height={30} /> : <Image src={"/img/eye-show.png"} width={30} height={30} />}</p>

        </label>
        <button>Giriş Yap </button>
      </form>
      <button onClick={() => setSign("signup")}>Kayıt Ol </button>
    </div>
  );
}
