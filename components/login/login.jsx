"use client"
  
import "./login.css";  

export default function Login({ setSign, sign }) {
  

  return (
    <div
      className="login" 
    >
      <form >
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
