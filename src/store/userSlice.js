import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticate: false,
  restaurantDetails: {},
  isLoading: false
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsAuthenticate: (state, action) => {
      state.isAuthenticate = action.payload
    },
    setRestaurantDetails: (state, action) => {
      state.restaurantDetails = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
})

export const { setIsAuthenticate, setRestaurantDetails, setIsLoading } = userSlice.actions

export default userSlice.reducer