import { useState, useEffect } from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { getTokenFromParams } from './utils'

function App() {

  const [token, setToken] = useState([])
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const token = getTokenFromParams().access_token
    setToken(token)
}, [])

  return (
    <div className="container" >

      <Navbar 
        token={token} />

        {
          token &&  (<Search
            token={token}
            setTracks={setTracks} />) 
        }

        <div className="App">

          { token ? 
              tracks.map(song => {
                return (<Playlist
                  key = {song.id}
                  url = {song.album.images[1].url}
                  name = {song.album.name}
                  artist= {song.artists[0].name} 
                  album = {song.name} />)
              })  : (<p className="app-body-text"> Selamat Datang Di My Spotify</p>) 
          }
        </div>
    </div>
  );
}

export default App;
