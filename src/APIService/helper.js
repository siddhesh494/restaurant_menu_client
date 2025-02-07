import axios from "axios"
import { getCookie } from "../utils/helper";

export const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  headers: {
    authorization: `Bearer ${getCookie("auth")}`
  }
});