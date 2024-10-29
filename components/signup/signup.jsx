"use client";
import { useState } from "react";
import "./signup.css";
import Image from "next/image";

export default function SignUp({ setSign, sign }) {
  const [image, setImage] = useState(null);

  function fileChange(e) {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setImage(file ? URL.createObjectURL(file) : null);
  }



  
  return (
    <div
      className="signup"
      style={{
        transform: sign === "signup" ? "translateY(20vh)" : "translateY(92vh)",
        transition: "all .6s",
      }}
    >
      <h1 onClick={() => setSign("signup")}>Kayıt Ol</h1>
      <form>
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
        <label htmlFor="nickName ">
          <input
            type="nickName "
            name="nickName "
            placeholder="Kullanıcı Adınız"
            required
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </label>
        <label className="imageAdd" htmlFor="image">
          {image ? (
            <>
              <Image width={100} height={100} src={image} />
              <button type="button">
                Profil Fotoğrafı Değiştir
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg, image/webp"
                  style={{ opacity: 0, position: "absolute" }}
                  onChange={(e) => fileChange(e)}
                  required
                  name="imageAdd"
                />
              </button>
            </>
          ) : (
            <button type="button">
              Profil Fotoğrafı Yükle
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg, image/webp"
                style={{ opacity: 0, position: "absolute" }}
                onChange={(e) => fileChange(e)}
                required
              />
            </button>
          )}
        </label>
        <button> Kayıt Ol </button>
      </form>
      <button onClick={() => setSign("login")}> Giriş Yap</button>
    </div>
  );
}
