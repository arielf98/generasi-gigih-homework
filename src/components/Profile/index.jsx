/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SideBar from '../SideBar';
import './style.css';
import Navbar from '../Navbar';
import NavbarIcon from '../NavbarIcon';

export default function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [currentPlaylist, setcurrentPlaylist] = useState([]);
  const userProfile = useSelector((state) => state.userData?.userProfile);

  return (
    <div className="container">
      <div className="profile-sidebar">
        <SideBar selected={selectedTracks} setShowModal={setShowModal} />
      </div>
      <div className="profile-main">
        <div className="profile-navbar">
          <Navbar />
        </div>
        <div className="profile-content">
          <div className="profile-card">
            <NavbarIcon />
            <p>
              {' '}
              Follower :
              {' '}
              {userProfile.followers.total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
