"use client";
import { useState } from "react";
import "./signup.css";
import { authRegister } from "@/utils/fetchBase";
import Image from "next/image";

export default function SignUp({ setSign, sign }) {
  const [eyes, setEyes] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const formObj = Object.fromEntries(new FormData(e.target));


    console.log(formObj, "signupformobj");

    try {
      if (formObj) {
        const response = await authRegister(formObj);
        console.log(response, "asdasdasdsasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
      }
    } catch (error) {
      console.error("Kayıt hatası:", error);
    }
  }

  return (
    <div
      className="signup"
      style={{
        transform: sign === "signup" ? "translateY(20vh)" : "translateY(92vh)",
        transition: "all .6s",
        opacity: sign === "login" ? "0" : "1",
      }}
    >
      <h1 onClick={() => setSign("signup")}>Kayıt Ol</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input type="text" name="firstName" placeholder="Adınız" required />
        </label>
        <label htmlFor="lastName">
          <input type="text" name="lastName" placeholder="Soyadınız" required />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="E-posta Adresiniz"
            required
          />
        </label>
        <label htmlFor="nickName">
          <input
            type="nickName"
            name="nickName"
            placeholder="Kullanıcı Adınız"
            required
          />
        </label>
        <label htmlFor="password" className="passwordlabel">
          <input
            type={eyes ? "text" : "password"}
            name="password"
            placeholder={eyes ? "Şifre Giriniz..." : "********"}
            required
          />
          <p onClick={() => setEyes(!eyes)}>
            {eyes ? (
              <Image src={"/img/eye-off.png"} alt="" width={30} height={30} />
            ) : (
              <Image src={"/img/eye-show.png"} alt="" width={30} height={30} />
            )}
          </p>
        </label>

        <button> Kayıt Ol </button>
      </form>
      <button onClick={() => setSign("login")}> Giriş Yap</button>
    </div>
  );
}
