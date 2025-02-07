import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticate: false,
  userDetails: {},
  isLoading: false
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsAuthenticate: (state, action) => {
      state.isAuthenticate = action.payload
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
})

export const { setIsAuthenticate, setUserDetails, setIsLoading } = userSlice.actions

export default userSlice.reducer