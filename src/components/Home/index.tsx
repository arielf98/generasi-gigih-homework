/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { storeToken, storeUserProfile } from '../../redux/userDataSlice';
import { getTokenFromParams } from '../../utils';
import './style.css';

export default function Home() {
  type userType = {
    token: string,
    userProfile : [],
    tracks: [],
  }

  type userDataType = { userData : userType }
  const dispatch = useDispatch();
  const history = useHistory();
  const authToken = useSelector<userDataType>((state) => state?.userData?.token);

  const Login = () => {
    const scope = 'playlist-modify-private';
    // const redirectUri = 'http://localhost:3000';
    // const redirectUri = 'http://192.168.0.111:3000';
    const redirectUri = 'https://generasi-gigih-homework-jade.vercel.app/';
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true&scope=${scope}`;
    window.location.href = url;
  };

  const getUserProfile = async (token : string) => {
    try {
      const url = 'https://api.spotify.com/v1/me';
      const result = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(storeUserProfile(result.data));
    } catch (err) {
      // console.error(err);
    }
  };

  useEffect(() => {
    const token = getTokenFromParams().access_token;
    if (token) {
      getUserProfile(token);
      dispatch(storeToken(token));
    }
  }, [authToken]);

  useEffect(() => {
    authToken ? history.push('/playlist') : history.push('/');
  }, [authToken]);

  return (
    <div className="home">
      <p className="home-body-text"> Selamat Datang Di My Album</p>
      <button type="button" onClick={() => Login()}> Login </button>
    </div>
  );
}
