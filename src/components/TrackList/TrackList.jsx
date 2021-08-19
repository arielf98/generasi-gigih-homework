/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import { useSelector } from 'react-redux';
import TrackCard from '../TrackCard';

export default function TrackList({ setSelected, selected }) {
  const tracks = useSelector((state) => state.userData?.tracks);

  return (

    <div className="playlist-main">
      <div className="track-title">
        <h1> Track List </h1>
      </div>
      <div className="main-container">
        {
        tracks.map((track) => (
          <TrackCard
            key={track.id}
            judul={track.name}
            artis={track.artists[0].name}
            album={track.album.name}
            waktu={track.duration_ms}
            image={track.album.images[1].url}
            uri={track.uri}
            selectedTrack={selected}
            setSelectedTrack={setSelected}
          />
        ))
      }

      </div>
    </div>
  );
}
