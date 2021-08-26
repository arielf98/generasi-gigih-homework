/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar';
import CreatePlaylist from '../CreatePlaylist';
import './style.css';
import SideBar from '../SideBar';
import TrackList from '../TrackList/TrackList';

export default function PlayList() {
  // const isLogin = useSelector((state) => state.userData?.isLogin);
  const token = useSelector((state) => state.userData?.token);
  const [showModal, setShowModal] = useState(false);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    token ? history.push('/playlist') : history.push('/');
  }, [token]);

  return (
    <div className="playlist-container">
      <CreatePlaylist
        showModal={showModal}
        setShowModal={setShowModal}
        setSelected={setSelectedTracks}
        selected={selectedTracks}
      />

      <Navbar />
      <SideBar
        selected={selectedTracks}
        setShowModal={setShowModal}
        showModal={showModal}
      />

      <TrackList
        selected={selectedTracks}
        setSelected={setSelectedTracks}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
