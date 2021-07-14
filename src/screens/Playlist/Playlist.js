import React from 'react'
import './Styles.css'
import data from '../../data'
import Image from '../../components/Image'
import Text from '../../components/Text'
import Button from '../../components/Button'

export default function Playlist() {

    return (
        <div className="playlist-container">
            <h1>Create Playlist</h1>

            <Image url = {data.album.images[1].url} />
            <Text text={data.name} />
            <Text text={data.artists[0].name} />
            <Text text={data.album.name} />
            <Button name="Select" />
        </div>
    )
}
