import "./signup.css";

export default function SignUp({ setSign, sign }) {
  return (
    <div
      className="signup"
      style={{
        transform:
          sign === "signup" ? "translateY(150px)" : "translateY(535px)",
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
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </label>
        <label htmlFor="image">
          <input type="file" placeholder="Fotoğrafınızı Yükleyiniz" />
        </label>
        <button> Kayıt Ol </button>
      </form>
      <button onClick={() => setSign("login")}> Giriş Yap</button>
    </div>
  );
}
