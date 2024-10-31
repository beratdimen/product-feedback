"use server";
import { AdvancedFetch } from "./advanced";

export const getFeedback = async (id) => {
  const response = await AdvancedFetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_CATEGORIES_ENDPOINT}?categoryId=${id}`
  );
  return response;
};

export const postFeedback = async (formData, likes) => {
  const response = await AdvancedFetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${API_CREATE_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: " */*",
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        categoryId: formData.categoryId,
      }),
    }
  );
  return { data: response, errors: error };
};

export const getDetailFeedbacks = async (id) => {
  const response = await AdvancedFetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_DETAIL_ENDPOINT}/` + id);
  console.log(response);
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

export const deleteFeddback = async (id) => {
  const response = await fetch(
    `https://feedbackapi.senihay.com/feedback/delete/` + id,
    {
      method: "DELETE",
      headers: {
        accept: "*/*",
      },
    }
  );
  console.log(response);
  return response;
};

export const changeStatus = async (id, status) => {
  const response = await fetch(
    `https://feedbackapi.senihay.com/feedback/changestatus?id=${id}&status=${status}`,
    {
      method: "PUT",
      headers: {
        accept: "*/*",
      },
    }
  );
  console.log(response);
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
          accept: "*/*",
        },
        body: formDataPost,
      }
    );

    const data = await response.json();

    console.log(response.status, "response status");


    if (!response.ok) {
      throw new Error(data.message || "Bir hata oluştu");
    }
    return response;
  } catch (errors) {
    return { data: null, errors };
  }
};

export const authLogin = async (formData) => {
  const body = JSON.stringify({
    email: formData.email,
    password: formData.password,
  });

  console.log(body, "BODY");

  try {
    const response = await fetch(
      `https://feedbackapi.senihay.com/auth/login`,
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: body,
        credentials: "include"
      }
    );

    console.log(response.status, "response status");
    const data = await response.json();


    if (!response.ok) {
      throw new Error(data.message || "Bir hata oluştu");
    }
    return data; // Başarılı yanıtı döndür
  } catch (errors) {
    return { data: null, errors };
  }
};

export const getMe = async () => {
  try {
    const response = await fetch(
      `https://feedbackapi.senihay.com/auth/getcurrentuser/me`,
      {
        method: "GET",
        headers: {
          accept: "*/*",
        },
      }
    );

    console.log(response, "response user aaaaaaaaaaaa");

    if (!response.ok) {
      throw new Error("Bir hata oluştu");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
};




export const getComments = async (id) => {
  const response = await fetch(
    `https://feedbackapi.senihay.com/comment/getcomments?feedbackId=${id}`);
  console.log(response);
  return response;
};

export const createComment = async (formData) => {
  const response = await AdvancedFetch(`https://feedbackapi.senihay.com/comment/createcomment`,
    "POST",
    {
      parentId: formData.parentId,
      content: formData.content,
      feedbackId: formData.feedbackId
    });
  console.log(response);
  return response;
};

export const deleteComment = async (id) => {
  const response = await fetch(
    `https://feedbackapi.senihay.com/comment/deletecomment?commentId=` + id,
    {
      method: "DELETE",
      headers: {
        accept: "*/*",
      },
    }
  );
  console.log(response);
  return response;
};

export const changeCommentStatus = async (id, status) => {
  const response = await fetch(
    `https://feedbackapi.senihay.com/comment/changecommentstatus?commentId=${id}&status=${status}`,
    {
      method: "PUT",
      headers: {
        accept: "*/*",
      },
    }
  );
  console.log(response);
  return response;
};


export const getCategory = async () => {
  const response = await fetch(
    `https://feedbackapi.senihay.com/category/getcategories`);
  console.log(response);
  return response;
};


export const createCategory = async (formData) => {
  const response = await AdvancedFetch(`https://feedbackapi.senihay.com/category/create`,
    "POST",
    {
      name: formData.name
    });
  console.log(response);
  return response;
};

export const updateCategory = async (formData) => {
  const response = await fetch(
    `https://feedbackapi.senihay.com/category/update`,
    {
      method: "PUT",
      headers: {
        accept: "*/*",
      },
      body: JSON.stringify(
        {
          id: formData.id,
          name: formData.name
        }
      )
    }
  );
  console.log(response);
  return response;
};

export const deleteCategory = async (id) => {
  const response = await fetch(
    `https://feedbackapi.senihay.com/category/delete?id=` + id,
    {
      method: "DELETE",
      headers: {
        accept: "*/*",
      },
    }
  );
  console.log(response);
  return response;
};
