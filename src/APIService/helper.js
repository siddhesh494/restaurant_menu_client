import axios from "axios"
import { getCookie } from "../utils/helper";
import baseURL from './baseURL.json'

let appENV = process.env.REACT_APP_API_ENV || 'development'

export const instance = axios.create({
  baseURL: baseURL[appENV].baseURL,
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