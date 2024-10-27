import { AdvancedFetch } from "./advanced";

export const getFeedback = async () => {
  const response = await AdvancedFetch(`www.bombabomba.com`);
  return response;
};

export const postFeedback = async (formData, likes) => {
  const response = await AdvancedFetch(`www.bombabombapost.com`, {
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
  });
  return response;
};

export const updateFeedback = async (formData) => {
  const response = await AdvancedFetch(`www.bombabombapost.com`, {
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
  });
  return response;
};