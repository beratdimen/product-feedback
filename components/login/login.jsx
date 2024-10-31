"use client"

import { authLogin } from "@/utils/fetchBase";
import "./login.css";

export default function Login({ setSign, sign }) {

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
          Email:
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="E-Posta Giriniz..."
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Şifre Giriniz..."
          />
        </label>
        <button>Giriş Yap </button>
      </form>
      <button onClick={() => setSign("signup")}>Kayıt Ol </button>
    </div>
  );
}
