import { USER_ID } from "../constants";

const baseUrl: string = "https://jsonplaceholder.typicode.com";

export const getPosts = async (payload: any) => {
  try {
    const req = await fetch(baseUrl + "/posts?userId=" + USER_ID, {
      method: "GET",
    });
    return await req.json();
  } catch (e) {
    return null;
  }
};

export const putPosts = async ({ formData }: any) => {
  try {
    const req = await fetch(baseUrl + "/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await req.json();
  } catch (e) {
    return null;
  }
};

export const deletePosts = async ({ postId }: any) => {
  try {
    const req = await fetch(baseUrl + "/posts/" + postId, {
      method: "DELETE",
    });
    return await req.json();
  } catch (e) {
    return null;
  }
};
