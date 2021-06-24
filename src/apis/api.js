import api from "./serverApi";

export const createpost = (ne) => {
  return api.post("/posts", ne);
};

export const fetchpost = () => {
  return api.get("/posts");
};

export const getUserpostsAPI = (userId) => {
  return api.get(`/posts/user/${userId}`);
};

export const removepost = (id) => {
  return api.delete(`/posts/${id}`);
};

export const getPostsFilterApi = (data) => {
  return api.post("/posts/filter", data);
};
export const getPostssearchApi = (data) => {
  return api.post("/posts/search", data);
};

export const updatepost = (id, newpost) => {
  return api.put(`/posts/${id}`, newpost);
};
