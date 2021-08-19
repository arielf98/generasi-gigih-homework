/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */

import { useSelector } from 'react-redux';
import React from 'react';
import Search from '../Search';
import './style.css';

export default function Navbar() {
  const userProfile = useSelector((state) => state.userData?.userProfile);

  console.log(userProfile);

  return (

    <div className="playlist-navbar">
      <div className="navbar">
        <Search />
        {
          userProfile.images?.length === 0 ? (
            <p className="user-profile-text">
              {' '}
              { userProfile.display_name.toUpperCase() }
              {' '}
            </p>
          ) : <img src={userProfile?.images} alt="user" />
        }
      </div>
    </div>
  );
}
