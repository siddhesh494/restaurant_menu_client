import { RESTAURANT_GET, RESTAURANT_UPDATE } from '../utils/apiEndPoint';
import { instance } from './helper';


export const updateRestaurantDetails = async (body) => {
  const result = await instance.post(RESTAURANT_UPDATE, body, {})
  return result.data && result.data.data
}

export const getRestaurantDetails = async (body) => {
  const result = await instance.post(RESTAURANT_GET, body, {})
  return result.data && result.data.data
}
