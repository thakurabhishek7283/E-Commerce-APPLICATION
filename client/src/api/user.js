import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchUsers = () => API.get("/user");
export const fetchUser = (userId) => API.get(`/user/${userId}`);
export const fetchUserCount = () => API.get("/user/count");

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);

export const deleteUser = (userId) => API.delete(`/${userId}`);
export const updateUser = (userId, formData) =>
  API.put(`/user/${userId}`, formData);
