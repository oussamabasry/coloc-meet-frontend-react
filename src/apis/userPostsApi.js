import api from "./serverApi";

export const addPostApi = (post) => {
  return api.post("/posts/", post);
};

export const getUserPostsApi = (userId) => {
  return api.get(`/posts/user/${userId}`);
};

export const deletePostApi = (postId) => {
  return api.delete(`/posts/${postId}`);
};

export const updatePostApi = (postId, post) => {
  return api.put(`/posts/${postId}`, post);
};
