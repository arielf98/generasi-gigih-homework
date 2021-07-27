import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    token: '',
  },
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { storeToken } = userDataSlice.actions

export default userDataSlice.reducer