/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../Navbar';
import { storeToken } from '../../redux/userDataSlice';
import { getTokenFromParams } from '../../utils';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getTokenFromParams().access_token;
    dispatch(storeToken(token));
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
        <p className="app-body-text"> Selamat Datang Di My Spotify</p>
      </div>
    </>
  );
}
