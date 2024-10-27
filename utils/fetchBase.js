"use server";
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
  return response;
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
