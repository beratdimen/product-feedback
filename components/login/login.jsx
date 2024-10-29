"use client"

import { useEffect, useState } from "react";
import "./login.css";
import { loginUser } from "@/utils/fetchBase";

export default function Login({ setSign, sign }) {

  const [formData, setFormData] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formObj = Object.fromEntries(new FormData(e.target)); 
    console.log(formObj);
    
    try { 
        const clientResponse = await loginUser(formObj);
        console.log("Müşteri kaydı başarılı:", clientResponse);
 
    } catch (error) {
      console.error("Kayıt hatası:", error);
    }
  }


  return (
    <div
      className="login" 
    >
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
