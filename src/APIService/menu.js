import { MENU_GET, MENU_UPDATE } from '../utils/apiEndPoint';
import { instance } from './helper';

export const getMenuDetails = async (body) => {
  const result = await instance.post(MENU_GET, body, {})
  return result.data && result.data.data
}

export const updateMenuDetails = async (body) => {
  const result = await instance.post(MENU_UPDATE, body, {})
  return result.data && result.data.data
}
