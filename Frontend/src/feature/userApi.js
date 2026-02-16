import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchUsersAPI = () => API.get("/get");

export const createUserAPI = (data) => 
  API.post("/create", data);

export const updateUserAPI = (id, data) =>
  API.put(`/update/${id}`, data);

export const deleteUserAPI = (id) =>
  API.delete(`/delete/${id}`);
