/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    token: '',
    userProfile: [],
    isLogin: false,
    tracks: [],
    activeHome: true,
    activeProfile: false,
  },
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    storeUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    isLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    storeTracks: (state, action) => {
      state.tracks = action.payload;
    },
    activeHome: (state, action) => {
      state.activeHome = action.payload;
    },
    activeProfile: (state, action) => {
      state.activeProfile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  storeToken, storeUserProfile, isLogin, storeTracks, activeHome, activeProfile,
} = userDataSlice.actions;

export default userDataSlice.reducer;
