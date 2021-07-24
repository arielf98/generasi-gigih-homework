import TrackList from '../TrackList/TrackList';
import Navbar from '../Navbar';
import Search from '../Search';
import { getTokenFromParams } from '../../utils'
import { useState, useEffect } from 'react';
import CreatePlaylist from '../CreatePlaylist';
import axios from 'axios';

export default function PlayList() {
    
  const [token, setToken] = useState('')
  const [tracks, setTracks] = useState([])
  const [selected, setSelected] = useState([])
  const [userProfile, setUserProfile] = useState({})
  const [playlistId, setPlaylistId] = useState('')



  useEffect(() => {
    const token = getTokenFromParams().access_token
    setToken(token)

    async function getUserProfile(){
        try {
          const url = 'https://api.spotify.com/v1/me'
          const result  = await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
          setUserProfile(result.data)
        } catch (err) {
          console.error(err);
        }
    }
    getUserProfile()

}, [])

    return (
        <>
                <Navbar
                    userProfile={userProfile}
                    token={token} />       

            {
            token &&  (
                <>
                    <CreatePlaylist
                        setPlaylistId={setPlaylistId}
                        userProfile={userProfile}
                       token={token} />

                    <Search
                        token={token}
                        setTracks={setTracks} />
                </>
                ) 
            }

           

            <div className="App">

            {
            token ? 
                tracks.map(song => {
                    return (
                    <TrackList
                    key = {song.id}
                    uri = {song.uri}
                    token={token}
                    playlistId = {playlistId}
                    selected={selected}
                    setSelected={setSelected}
                    url = {song.album.images[1].url}
                    name = {song.album.name}
                    artist = {song.artists[0].name} 
                    album = {song.name} />
                    )
                    
                }) : (<p className="app-body-text"> Selamat Datang Di My Spotify</p>) 
            }
            </div>
        </>
    )
}
