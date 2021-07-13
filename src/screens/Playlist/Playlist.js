import React from 'react'
import './Styles.css'
import data from '../../data'

export default function Playlist() {

    console.log(data)

    const height = data.album.images[1].height
    const width = data.album.images[1].width

    return (
        <div className="playlist-container">
            <h1>Create Playlist</h1>

            <img style={{ height, width }} src={data.album.images[0].url} alt="album" />
            <p>{data.name}</p>
            <p>{data.artists[0].name}</p>
            <p>{data.album.name}</p>
        </div>
    )
}
