import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/public/",
});

export const login = async (data) => {
  return await instance.post("signin", data);
};
