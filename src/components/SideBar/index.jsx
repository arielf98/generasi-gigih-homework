/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  MdPlaylistAdd, MdInput, MdPerson, MdHome,
} from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  isLogin, storeUserProfile, storeTracks, storeToken, activeHome, activeProfile,
} from '../../redux/userDataSlice';
import './style.css';

export default function SideBar({ setShowModal, selected }) {
  const dispatch = useDispatch();
  const homeClass = useSelector((state) => state?.userData?.activeHome);
  const profileClass = useSelector((state) => state?.userData?.activeProfile);
  const history = useHistory();
  const showModalComp = () => {
    if (selected?.length === 0) {
      return alert('isi minimal 1 lagu');
    }
    return setShowModal(true);
  };

  const handleLogOut = (e) => {
    e.preventDefault();

    dispatch(isLogin(false));
    dispatch(storeToken(''));
    dispatch(storeTracks([]));
    dispatch(storeUserProfile([]));
    history.push('/');
  };

  const toProfilePage = (e) => {
    e.preventDefault();
    history.push('/profile');
    dispatch(activeHome(false));
    dispatch(activeProfile(true));
  };

  const toHomePage = (e) => {
    e.preventDefault();
    history.push('/playlist');
    dispatch(activeProfile(false));
    dispatch(activeHome(true));
  };

  return (
    <div className="playlist-sidebar">
      <div className="sidebar-text">
        <h1> My Album </h1>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => showModalComp()}
            >
              <MdPlaylistAdd size={25} />
              {' '}
              Create Playlist
            </button>
          </li>
          <li>
            <button
              onClick={(e) => toHomePage(e)}
              type="button"
              className={homeClass ? 'active' : ''}
            >
              <MdHome size={25} />
              {' '}
              Home
            </button>
          </li>
          <li>
            <button
              onClick={(e) => toProfilePage(e)}
              type="button"
              className={profileClass ? 'active' : ''}
            >
              <MdPerson size={25} />
              {' '}
              Profile
            </button>
            {/* <Link to="/profile"> Profile </Link> */}
          </li>
          <li>
            <button
              onClick={(e) => handleLogOut(e)}
              type="button"
            >
              <MdInput color="plain" size={20} />
              {' '}
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
