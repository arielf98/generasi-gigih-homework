import React from 'react'
import './Styles.css'
import Image from '../Image'
import Text from '../Text'
import Button from '../Button'

export default function Playlist({url, name, artist, album}) {

    return (
        <div className="playlist-container">
            <Image url = {url} />

            <div className="playlist-text">
                <Text text={name} />
                <Text text={artist} />
                <Text text={album} />
                <Button name="Select" />
            </div>
        </div>
    )
}
