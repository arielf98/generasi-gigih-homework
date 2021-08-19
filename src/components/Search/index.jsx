/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchType, stateType } from '../../Type/Type';
import { storeTracks } from '../../redux/userDataSlice';

export default function Search() {
  const [query, setQuery] = useState('');
  const token = useSelector((state) => state.userData?.token);
  const tracks = useSelector((state) => state.userData?.tracks);
  const dispatch = useDispatch();
  const handleSearch = async () => {
    if (query !== '') {
      try {
        const url = `https://api.spotify.com/v1/search?q=${query}&type=track,artist`;
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(storeTracks(result.data.tracks.items));
        setQuery('');
      } catch (err) {
        // console.error(err);
      }
    }
  };
  return (

    <div className="searchbar">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
        placeholder="Search...."
      />
      <button type="button" onClick={handleSearch}> Search </button>
    </div>

  );
}
