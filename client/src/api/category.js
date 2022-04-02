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

export const fetchCategories = () => API.get("/category/");
export const fetchCategory = (catId) => API.get(`/category/${catId}`);
export const updateCategory = (catId) =>
  API.put(`/category/${catId}`, formData);
export const createCategory = () => API.post("/category/", formData);
export const deleteCategory = (catId) => API.delete(`/category/${catId}`);
