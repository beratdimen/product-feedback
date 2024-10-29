"use server";

import { redirect } from "next/navigation";
import { AdvancedFetch } from "./advanced";

export const getFeedback = async () => {
  const response = await AdvancedFetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`
  );
  return response;
};

export const postFeedback = async (formData, likes) => {
  const response = await AdvancedFetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "text/plain",
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        categoryId: formData.categoryId,
        likes: likes ? likes : 0,
        roadmap: 0,
      }),
    }
  );
  return { data: response, errors: error };
};

export const updateFeedback = async (formData) => {
  const response = await AdvancedFetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "text/plain",
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        categoryId: formData.categoryId,
        roadmap: formData.roadmap,
      }),
    }
  );
  return response;
};

export async function getDeneme(params) {
  const { response, status, error } = await AdvancedFetch(url);
  if (error || status !== 200) {
    throw new Error("Bir Hata Oluştu");
  }

  return { success: true, data: response };
}

export const authRegister = async (formData) => {
  console.log(formData, "adasdasadasd");
  const formDataPost = new FormData();
  formDataPost.append("FirstName", formData.firstName);
  formDataPost.append("LastName", formData.lastName); 
  formDataPost.append("Nickname", formData.nickName);
  formDataPost.append("Email", formData.email);
  formDataPost.append("Password", formData.password);

  console.log(formDataPost);

  try {
    const response = await fetch(
      `https://feedbackapi.senihay.com/auth/register`,
      {
        method: "POST",
        headers: {
          "accept": "*/*",
        },
        body: formDataPost,
      }

    );

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Bir hata oluştu");
    }
    return response;
  } catch (errors) {
    return { data: null, errors };
  }
};
  