"use server";
import { redirect } from "next/navigation";
import { AdvancedFetch } from "./advanced";
import { cookies } from "next/headers";

export const getFeedback = async (id, page, pageSize) => {
  const response = await AdvancedFetch(
    `https://feedbackapi.senihay.com/feedback/getfeedbacks?page=${page}&pageSize=${pageSize}`
  );
  return response;
};

export const postFeedback = async (formData, likes) => {
  const response = await AdvancedFetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${API_CREATE_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        Cookie: cookies().toString(),
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
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_DETAIL_ENDPOINT}/${id}`
  );

  if (response.status != 200) {
    return { error: "No Detail" };
  }

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

export const deleteFeedback = async (id) => {
  console.log(id, "id adasdsad");
  console.log(typeof id, "id adasdsad");

  const response = await fetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_DELETE_ENDPOINT}/${id}`,
    {
      method: "DELETE",
      headers: {
        accept: "*/*",
        Cookie: cookies().toString(),
      },
    }
  );
  console.log(response, "response delete");

  if (response.ok) {
    console.log("Form gönderildi");
  } else if (response.status == 404) {
    console.log("404 Hatası: ID bulunamadı veya geçersiz URL.");
  }
  return response;
};

export const changeStatus = async (id, status) => {
  const response = await fetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_FEEDBACKS_ENDPOINT}${process.env.API_CHANGESTATUS_ENDPOINT}?id=${id}&status=${status}`,
    {
      method: "PUT",
      headers: {
        accept: "*/*",
      },
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
  const formDataPost = new FormData();
  formDataPost.append("FirstName", formData.firstName);
  formDataPost.append("LastName", formData.lastName);
  formDataPost.append("Nickname", formData.nickName);
  formDataPost.append("Email", formData.email);
  formDataPost.append("Password", formData.password);
  formDataPost.append("AvatarImg", "");

  // try {
  const response = await fetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_AUTH_ENDPOINT}${process.env.API_REGISTER_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        accept: "*/*",
      },
      body: formDataPost,
      credentials: "include",
    }
  );

  // const data = await response.json();

  //   if (!response.ok) {
  //     throw new Error(data.message || "Bir hata oluştu");
  //   }
  //   return response;
  // } catch (errors) {
  //   return { data: null, errors };
  // }

  const data = await response.text();
  console.log(data, "kayıt data");
  if (!response.ok) {
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

  redirect("/");
};

export const authLogin = async (formData) => {
  const body = JSON.stringify({
    email: formData.email,
    password: formData.password,
  });

  try {
    const response = await fetch(`https://feedbackapi.senihay.com/auth/login`, {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: body,
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Bir hata oluştu");
    }
    return data; // Başarılı yanıtı döndür
  } catch (errors) {
    return { data: null, errors };
  }
};

export async function loginUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_AUTH_ENDPOINT}${process.env.API_LOGIN_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    }
  );
  const data = await response.text();
  if (!response.ok) {
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

export const getMe = async () => {
  try {
    const response = await fetch(
      `${process.env.API_ROOT_ENDPOINT}${process.env.API_AUTH_ENDPOINT}${process.env.API_USER_ME_ENDPOINT}`,
      {
        method: "GET",
        headers: {
          accept: "*/*",
          Cookie: cookies().toString(),
        },
      }
    );

    if (!response.ok) {
      return { error: "Unauthorized" };
    }

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
};

export const logOut = async () => {
  try {
    const response = await fetch(
      `${process.env.API_ROOT_ENDPOINT}${process.env.API_AUTH_ENDPOINT}${process.env.API_LOGOUT_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          accept: "*/*",
          Cookie: cookies().toString(),
        },
      }
    );

    if (response.ok) {
      cookies().set(".AspNetCore.Identity.Application", "", { maxAge: -1 });
    } else {
      console.error("Çıkış işlemi başarısız:", response.statusText);
    }
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
};

export const getComments = async (id) => {
  try {
    const response = await fetch(
      `${process.env.API_ROOT_ENDPOINT}${process.env.API_COMMENTS_ENDPOINT}${process.env.API_GET_COMMENTS_ENDPOINT}?feedbackId=${id}`
    );
    if (!response.ok) {
      return { error: "NO Comment" };
    }
    const data = await response.json();
    console.log(data, "datasdasdsafsafasdsadas");
    return { data };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
};

export const createComment = async (formData) => {
  const response = await AdvancedFetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_COMMENTS_ENDPOINT}${process.env.API_CREATE_COMMENTS_ENDPOINT}`,
    "POST",
    {
      content: content,
      feedbackId: feedbackId,
    }
  );
  return response;
};

export const deleteComment = async (id) => {
  const response = await fetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_COMMENTS_ENDPOINT}${process.env.API_DELETE_COMMENTS_ENDPOINT}?commentId=` +
      id,
    {
      method: "DELETE",
      headers: {
        accept: "*/*",
      },
    }
  );
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
  return response;
};

export const getCategory = async () => {
  const response = await fetch(
    `${process.env.API_ROOT_ENDPOINT}${process.env.API_CATEGORY_ENDPOINT}${process.env.API_GET_CATEGORY_ENDPOINT}`
  );
  const data = await response.json();

  return data;
};

export const createCategory = async (formData) => {
  const response = await AdvancedFetch(
    `https://feedbackapi.senihay.com/category/create`,
    "POST",
    {
      name: formData.name,
    }
  );
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
      body: JSON.stringify({
        id: formData.id,
        name: formData.name,
      }),
    }
  );
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
  return response;
};


export const getroadmapCount = async () => {
  try {
    const response = await fetch(
      `https://feedbackapi.senihay.com/roadmap/getroadmapcount`,
      {
        method: "GET",
        headers: {
          accept: "*/*",
          Cookie: cookies().toString(),
        },
      }
    );

    if (!response.ok) {
      return { error: "Unauthorized" };
    }

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
};
