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

export const fetchProducts = () => API.get("/product/");
export const fetchProduct = (productId) => API.get(`/product/${productId}`);
export const fetchFeaturedCount = () => API.get("/featured/count");
export const updateProduct = (productId) =>
  API.put(`/product/${productId}`, formData);
export const createProduct = () => API.post("/product/", formData);
export const deleteProduct = (productId) => API.delete(`/product/${productId}`);
export const getCount = () => API.get("/product/count");
