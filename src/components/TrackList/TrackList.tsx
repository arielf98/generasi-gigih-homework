/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import { trackListType } from '../../Type/Type';
import './Styles.css';

export default function TrackList({
  url, name, artist, album, uri, setSelected, selected,
}: trackListType) {
  function selectTracks() {
    setSelected([...selected, uri]);
  }

  function deselectTracks() {
    const selectedArray = [...selected];
    const index = selectedArray.indexOf(uri);
    if (index > -1) {
      selectedArray.splice(index, 1);
      setSelected(selectedArray);
    }
  }

  const isTrackSelected = selected.includes(uri);

  return (
    <div className="playlist-container">
      <img src={url} alt="" />
      <div className="playlist-text">
        <p>{name}</p>
        <p>{artist}</p>
        <p>{album}</p>
        <button
          type="button"
          className={isTrackSelected && 'selected-button'}
          onClick={() => (isTrackSelected
            ? deselectTracks()
            : selectTracks())}
        >
          {isTrackSelected ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
}
