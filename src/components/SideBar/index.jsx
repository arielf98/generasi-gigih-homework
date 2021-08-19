/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdPlaylistAdd, MdInput } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  isLogin, storeUserProfile, storeTracks, storeToken,
} from '../../redux/userDataSlice';

export default function SideBar({ setShowModal, selected }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const showModalComp = () => {
    if (selected.length === 0) {
      return alert('isi minimal 1 track');
    }
    return setShowModal(true);
  };

  const handleLogOut = () => {
    dispatch(isLogin(false));
    dispatch(storeToken(''));
    dispatch(storeTracks([]));
    dispatch(storeUserProfile([]));
    history.push('/');
  };

  return (
    <div className="playlist-sidebar">
      <div className="sidebar-text">
        <h1> My Album </h1>
        <ul>
          <li>
            <button
              onClick={() => showModalComp()}
              type="button"
            >
              <MdPlaylistAdd size={25} />
              {' '}
              Create Playlist
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLogOut()}
              type="button"
            >
              <MdInput color="plain" size={25} />
              {' '}
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
