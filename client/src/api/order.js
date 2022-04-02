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

export const fetchOrders = () => API.get("/order/");
export const fetchOrder = (orderId) => API.get(`/order/${orderId}`);
export const createOrder = () => API.post("/order/", formData);
export const deleteOrder = (orderId) => API.delete(`/order/${orderId}`);
export const fetchOrderByUser = (userId) => API.get(`/order/user/${userId}`);
export const fetchOrderCount = () => API.get("/order/count");
export const fetchTotalSale = () => API.get("/order/sales");
