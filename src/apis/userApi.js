import api from "./serverApi";

export const loginApi = (authData) => {
  return api.post("/users/login", authData);
};

export const signupApi = (data) => {
  return api.post("/users/signup", data);
};


