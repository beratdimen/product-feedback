import "./signup.css";
import { authRegister } from "@/utils/fetchBase";

export default function SignUp({ setSign, sign }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const formObj = Object.fromEntries(new FormData(e.target));
    console.log(formObj);

    try {
      if (formObj) {
        const response = await authRegister(formObj);
        console.log(response, "asdasdasds");
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
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </label>

        <button> Kayıt Ol </button>
      </form>
      <button onClick={() => setSign("login")}> Giriş Yap</button>
    </div>
  );
}
