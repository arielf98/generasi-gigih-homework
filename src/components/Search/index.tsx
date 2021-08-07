/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { searchType, stateType } from '../../Type/Type';

export default function Search({ setTracks, selected, setShowModal }: searchType) {
  const [query, setQuery] = useState<string>('');
  const token = useSelector((state: stateType) => state.userData?.token);

  async function handleSearch(): Promise<void> {
    if (query !== '') {
      try {
        const url = `https://api.spotify.com/v1/search?q=${query}&type=track,artist`;
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTracks(result.data.tracks.items);
        setQuery('');
      } catch (err) {
        // console.error(err);
      }
    }
  }

  function handleCreate() {
    setShowModal(true);
  }

  return (

    <div className="search">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
        placeholder="Search...."
      />
      <button type="button" onClick={handleSearch}> Search </button>
      {
        selected.length > 0 && <button type="button" onClick={handleCreate}> Create </button>
      }

    </div>

  );
}
