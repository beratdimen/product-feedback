"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function FormVAlidation(prevState, formData) {
  const formObj = Object.fromEntries(formData);

  const errors = {
    title: !formObj.title && "Başlık alanı boş olamaz.",
    content: !formObj.content && "İçerik alanı boş olamaz.",
    categoryId: !formObj.categoryId && "Kategori  alanı boş olamaz.",
    roadmap: !formObj.roadmap && "roadmap alanı boş olamaz.",
  };

  const filteredErrors = Object.fromEntries(
    Object.entries(errors).filter(([_, v]) => v)
  );

  // console.log("errors :>> ", filteredErrors);

  if (Object.keys(filteredErrors).length > 0) {
    return { error: filteredErrors };
  }
}

export async function loginUser(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("https://feedbackapi.senihay.com/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
    credentials: "include",
  });
  const data = await response.text();
  if (!response.ok) {
    console.log(data);

    return {
      error: "Giriş Yapılamadı",
    };
  }

  const responseCookie = response.headers.get("set-cookie");
  const cookiesArray = responseCookie.split(",");
  const a = cookiesArray.flatMap((x) => x.split(";"));
  const cookiesObject = {};
  a.forEach((cookie) => {
    const [key, value] = cookie.trim().split("=");
    cookiesObject[key] = value;
  });
  console.log(cookiesObject);

  console.log(cookiesObject[".AspNetCore.Identity.Application"]);

  cookies().set(
    ".AspNetCore.Identity.Application",
    cookiesObject[".AspNetCore.Identity.Application"]
  );
  if (response.ok) redirect("/");
}

export async function saveFeedback(formData) {
  console.log(formData);
  const title = formData.get("title");
  const detail = formData.get("content");
  const categoryId = formData.get("category");

  const response = await fetch(
    "https://feedbackapi.senihay.com/feedback/create",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        title,
        detail,
        categoryId: parseInt(categoryId),
      }),
    }
  );
 
  console.log(response);
  if (response.ok) console.log("form göönderildi");
  else if (response.status == 404) {
    console.log("skıntı var");
  }
}
