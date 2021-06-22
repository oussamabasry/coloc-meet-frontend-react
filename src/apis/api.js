import api from "./serverApi";


export const createpost =(ne) =>{
   return api.post("/posts",ne)
}

export const fetchpost=()=> {
  return  api.get('/posts')
}

export const getUserpostsAPI = (userId) => {
  return api.get(`/posts/user/${userId}`);
};

export const removepost = (id) => {
  return api.delete(`/posts/${id}`)
}

export const updatepost = (id, newpost)=> { return api.put(`/posts/${id}`,newpost)}
