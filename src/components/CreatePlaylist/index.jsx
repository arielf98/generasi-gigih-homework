/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import './Styles.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function CreatePlaylist({
  selected, setShowModal, showModal, setSelected,
}) {
  const [form, setForm] = useState({
    nama: '',
    deskripsi: '',
  });

  const token = useSelector((state) => state.userData?.token);
  const userId = useSelector((state) => state.userData?.userProfile.id);

  function handleOnchange(e) {
    const { name } = e.target;
    const { value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function addToPlaylist(playlistId) {
    try {
      const config = {
        method: 'post',
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          uris: selected,
        },
      };
      await axios(config);
    } catch (e) {
      // console.log(e);
    }
  }

  function handleHideModal() {
    setShowModal(false);
  }

  async function createPlaylist(e) {
    e.preventDefault();
    try {
      const config = {
        method: 'post',
        url: `https://api.spotify.com/v1/users/${userId}/playlists`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          name: `${form.nama}`,
          description: `${form.deskripsi}`,
          public: 'false',
        },
      };
      const result = await axios(config);
      addToPlaylist(result.data.id);
      alert('Playlist Berhasil Dibuat');
      setForm({ nama: '', deskripsi: '' });
      handleHideModal();
      setSelected([]);
    } catch (error) {
      // console.log(error);
      alert('Ada yang salah');
    }
  }

  return (
    <div
      className={showModal ? 'create-playlist-container' : 'display-none'}
    >

      <form onSubmit={createPlaylist}>
        <button type="button" onClick={handleHideModal}> X </button>
        <label htmlFor="nama"> Nama Playlist </label>
        <input onChange={handleOnchange} type="text" value={form.nama} placeholder="Nama Playlist" minLength="10" id="nama" name="nama" />
        <label htmlFor="deskripsi"> Deskripsi Playlist </label>
        <input onChange={handleOnchange} type="text" value={form.deskripsi} placeholder="Deskripsi Playlist" minLength="20" id="deskripsi" name="deskripsi" />
        <input type="submit" value="Buat" />
      </form>
    </div>
  );
}
