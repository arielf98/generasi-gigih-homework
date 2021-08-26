/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

export default function TrackCard({
  artis, album, judul, waktu, image, selectedTrack, setSelectedTrack, uri,
}) {
  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes} menit ${(seconds < 10 ? '0' : '')}${seconds} detik`;
  };
  const trackIsSelected = selectedTrack.includes(uri);

  const selectTrack = () => {
    if (!trackIsSelected) {
      setSelectedTrack([...selectedTrack, uri]);
    }
    const tracks = [...selectedTrack];
    const index = tracks.indexOf(uri);
    if (index > -1) {
      tracks.splice(index, 1);
      setSelectedTrack(tracks);
    }
  };

  return (
    <div className="track-container">
      <div className="track-card">
        <div className="track-image">
          <img src={image} alt="playlist" />
          <div className="track-text">
            <p>
              Artis :
              {' '}
              {artis}
            </p>
            <p>
              Title :
              {' '}
              {judul}
            </p>
            <p>
              Album :
              {' '}
              {album}
            </p>
            <p>
              Time :
              {' '}
              {millisToMinutesAndSeconds(waktu)}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className={trackIsSelected ? 'btn-deselect' : ''}
          onClick={selectTrack}
        >
          {' '}
          {trackIsSelected ? 'Deselect' : 'Select'}
        </button>
      </div>
    </div>
  );
}
