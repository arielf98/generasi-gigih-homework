import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    token: '',
    userProfile : {},
    isLogin : false,
  },
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload
    },
    storeUserProfile:(state, action) => {
      state.userProfile = action.payload
    },
    isLogin:(state, action) => {
      state.isLogin = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { storeToken, storeUserProfile, isLogin } = userDataSlice.actions

export default userDataSlice.reducer