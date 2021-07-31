/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router';
import TrackList from '../TrackList/TrackList';
import Navbar from '../Navbar';
import Search from '../Search';
import CreatePlaylist from '../CreatePlaylist';
// import { storeToken, storeUserProfile } from '../../redux/userDataSlice';
// import { getTokenFromParams } from '../../utils';

export default function PlayList() {
  const token = useSelector((state) => state.userData?.token);
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const state = useSelector((state) => state.userData?.userProfile);

  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [showModal, setShowModal] = useState(false);

  return (
    <>

      <Navbar
        setShowModal={setShowModal}
        userProfile={userProfile}
      />

      {
        token && (

          <Search
            setShowModal={setShowModal}
            selected={selected}
            setTracks={setTracks}
          />
        )
      }

      {
        showModal && (
          <CreatePlaylist
            setSelected={setSelected}
            userProfile={userProfile}
            selected={selected}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )
      }

      <div className="App">

        {
          tracks.map((song) => (
            <TrackList
              key={song.id}
              uri={song.uri}
              token={token}
              selected={selected}
              setSelected={setSelected}
              url={song.album.images[1].url}
              name={song.album.name}
              artist={song.artists[0].name}
              album={song.name}
            />
          ))
        }
      </div>
    </>
  );
}
