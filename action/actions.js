"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function FormVAlidation(prevState, formData) {
  const formObj = Object.fromEntries(formData);

  const errors = {
    title: !formObj.title && "Başlık alanı boş olamaz.",
    detail: !formObj.detail && "İçerik alanı boş olamaz.",
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

  cookies().set(
    ".AspNetCore.Identity.Application",
    cookiesObject[".AspNetCore.Identity.Application"]
  );
  if (response.ok) redirect("/");
}

export async function saveFeedback(formData) {
  const title = formData.title;
  const detail = formData.detail;
  const categoryId = formData.category;

  console.log("bu pushlama berat için");

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

  if (response.ok) console.log("form göönderildi");
  else if (response.status == 404) {
    console.log("skıntı var");
  }
}

export async function postComments(formData) {
  const feedbackId = formData.feedbackid;
  const content = formData.content;

  console.log("bu pushlama berat için");

  const response = await fetch(
    "https://feedbackapi.senihay.com/comment/createcomment",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        content,
        feedbackId,
      }),
    }
  );

  console.log(response);
  

  if (response.ok) console.log("form göönderildi");
  else if (response.status == 404) {
    console.log("skıntı var");
  }
}

export async function postReplyComments(formData) {
  const feedbackId = formData.get("feedbackid");
  const content = formData.get("content");
  const parentId = formData.get("parentid");

  console.log(feedbackId, "feedbackId");
  console.log(content, "content");
  console.log(parentId, "parentId");

  const response = await fetch(
    "https://feedbackapi.senihay.com/comment/createcomment",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        parentId,
        content,
        feedbackId,
      }),
    }
  );
  console.log(response, "parent");

  if (response.ok) console.log("form göönderildi");
  else if (response.status == 404) {
    console.log("skıntı var");
  }
}

//status 200 dönmesine rağmen çalışmayan lanet fetch
export async function deleteFeedbacks(id) {
  try {
    const response = await fetch(
      `https://feedbackapi.senihay.com/feedback/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      }
    );

    // Check if the response is OK
    if (response.ok) {
      const data = await response.json();
      console.log("Feedback deleted successfully:", data);
    } else if (response.status === 404) {
      console.log("Error: Feedback not found");
    } else {
      console.log("An error occurred during deletion:", response.status);
    }
  } catch (error) {
    console.error("Network or server error:", error);
  }
  redirect("/");
}

export async function updateFeedbacks(formData) {
  const title = formData.title;
  const categoryId = parseInt(formData.categoryId);
  const status = parseInt(formData.status);
  const detail = formData.detail;
  const id = formData.dataid;

  console.log(formData);

  const response = await fetch(
    `https://feedbackapi.senihay.com/feedback/update/${id}`,
    {
      method: "PUT",
      headers: {
        accept: "*/*",
        "Content-type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        id,
        title,
        detail,
        categoryId,
        status,
      }),
    }
  );

  console.log(response, "update");

  if (response.ok) console.log("form gönderildi");
  else if (response.status == 404) {
    console.log("skıntı var");
  }
}
export const upvoteFeedback = async (id) => {
  id = parseInt(id);
  const response = await fetch(
    `https://feedbackapi.senihay.com/upvote/upvote?feedbackId=` + id,
    {
      method: "POST",
      headers: {
        accept: "*/*",
        Cookie: cookies().toString(),
      },
    }
  );

  if (!response.ok) {
    throw new Error("Upvote failed");
  }

  return response.json(); // API'den gelen veri burada döndürülür
};
