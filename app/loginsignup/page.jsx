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
      <Image src={"/public/img/bglogin.mp4"} width={500} height={500} />
      <div className="loginsignup">
        <Login setSign={setSign} sign={sign} />
        <SignUp setSign={setSign} sign={sign} />
      </div>
      <div className="loginText">
        {sign === "login" ?
          <div className="login">
            <h1>Giriş Yapın</h1>
            <p>Geri Bildiriminiz Önemli!
              Hesabınıza giriş yaparak paylaştığınız görüşleri takip edin, değerlendirmelerinize yenilerini ekleyin ve katkıda bulunun. Bize katılarak fikirlerinizle daha iyiyi bulmamıza yardımcı olun.

              Şimdi giriş yapın ve sesinizi duyurun!</p>
          </div> :
          <div className="signuptext" 
          style={{
            transform: sign === "signup" ? "translateY(0px)" : "translateY(625px)",
            transition: "all .6s",
          }}>
            <h1>Kayıt Olun</h1>
            <p>Aramıza Katılın!
            Hızlı ve kolay bir adımla kayıt olun, geri bildirimlerinizi paylaşarak projelerimizi geliştirmemize katkıda bulunun. Fikirlerinizi bizimle paylaşarak daha iyiyi inşa etmemize yardımcı olun!

            Görüşlerinizi bizimle paylaşmak için şimdi kayıt olun.</p>
          </div> }
      </div>
    </div>
  );
}
