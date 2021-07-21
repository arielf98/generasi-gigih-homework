import React from 'react'
import './Styles.css'
import Image from '../../components/Image'
import Text from '../../components/Text'
import Button from '../../components/Button'

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
