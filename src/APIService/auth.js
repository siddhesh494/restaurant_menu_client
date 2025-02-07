import { LOGIN, REGISTER, VERIFY_JWT_TOKEN } from '../utils/apiEndPoint';
import { removeCookie } from '../utils/helper';
import { instance } from './helper';


export const verifyJWTToken = async () => {
  const result = await instance.get(VERIFY_JWT_TOKEN, {}, {})
  return result.data && result.data.data
}


export const register = async (body) => {
  const result = await instance.post(REGISTER, body, {})
  return result.data && result.data.data
}

export const login = async (body) => {
  const result = await instance.post(LOGIN, body, {})
  return result.data && result.data.data
}
export const logout = async () => {
  removeCookie("auth")
}