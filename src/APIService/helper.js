import axios from "axios"
import { getCookie } from "../utils/helper";

export const instance = axios.create({
  baseURL: 'http://192.168.1.36:4000/api/v1',
  headers: {
    authorization: `Bearer ${getCookie("auth")}`
  }
});

instance.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${getCookie("auth")}`
    return config
  },
  (err) => Promise.reject(err)
)