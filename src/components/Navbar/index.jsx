/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */

import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
// import { getTokenFromParams } from '../../utils';
import { storeToken, storeUserProfile, isLogin } from '../../redux/userDataSlice';
import ProfileIcon from '../ProfileIcon';

export default function Navbar() {
  const token = useSelector((state) => state.userData?.token);
  const userProfile = useSelector((state) => state.userData?.userProfile);
  const dispatch = useDispatch();
  const history = useHistory();

  function Login() {
    const scope = 'playlist-modify-private';
    // const redirectUri = 'http://localhost:3000';
    const redirectUri = 'https://generasi-gigih-homework-amber.vercel.app/';
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true&scope=${scope}`;
    dispatch(isLogin(true));
    window.location = url;
  }

  const handleCreatePlaylist = () => {
    token ? history.push('/playlist') : history.push('/');
  };

  const handleLogOut = () => {
    history.push('/');
    dispatch(storeToken(''));
    dispatch(storeUserProfile({}));
  };

  useEffect(() => {
    async function getUserProfile() {
      try {
        const url = 'https://api.spotify.com/v1/me';
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // setUserProfile(result.data)
        dispatch(storeUserProfile([result.data]));
      } catch (err) {
        // console.error(err);
      }
    }
    getUserProfile();
  }, [token]);

  useEffect(() => {
    async function getUserProfile() {
      try {
        const url = 'https://api.spotify.com/v1/me';
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // setUserProfile(result.data)
        dispatch(storeUserProfile(result.data));
      } catch (err) {
        // console.error(err);
      }
    }
    getUserProfile();
  }, [dispatch]);

  // const isUserProfileEmpty = Object.keys(userProfile)?.length === 0 && userProfile?.constructor === Object;
  const isUserProfileEmpty = userProfile?.length === 1;

  const checkUserProfile = (profile) => (profile ? (
    <ProfileIcon
      url={userProfile[0]?.images[0]?.url}
      name={userProfile[0]?.display_name}
    />
  ) : (<button type="button" data-testid="login" onClick={() => Login()}> Login </button>)
  );

  return (
    <div>
      <div className="navbar">
        {
          token ? <h1>Create Playlist</h1> : <h1 data-testid="text-navbar"> My Spotify </h1>
        }

        <button type="button" data-testid="create-playlist" onClick={handleCreatePlaylist}> Create Playlist </button>
        {
          token && <button type="button" onClick={handleLogOut}> Log Out </button>
        }

        {
          // isUserProfileEmpty ? (<button type="button" onClick={() => Login()}> Login </button>)
          //   : (
          //     <ProfileIcon
          //       url={userProfile?.images[0]?.url}
          //       name={userProfile?.display_name}
          //     />
          //   )
          checkUserProfile(isUserProfileEmpty)
        }

      </div>
    </div>
  );
}
