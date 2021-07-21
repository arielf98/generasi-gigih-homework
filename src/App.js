import { useState, useEffect } from 'react';
import './App.css';
import Playlist from './screens/Playlist/Playlist';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { getTokenFromParams } from './utils'
import axios from 'axios'

function App() {

  const [token, setToken] = useState([])
  const [query, setQuery] = useState('')
  const [tracks, setTracks] = useState([])

  async function handleSearch ()  {
   
    try {
      let url = 'https://api.spotify.com/v1/search?q='+query+'&type=track,artist';
      const result  = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
        setTracks(result.data.tracks.items);
    } catch (err) {
      console.error(err);
    }
}

  useEffect(() => {
    const token = getTokenFromParams().access_token
    setToken(token)
}, [])

  return (
    <div className="container" >

      <Navbar 
        token={token} />

      <Search
        setQuery={setQuery}
        query={query}
        handleSearch={handleSearch} />

        <div className="App">
          {
              tracks.map(song => {
                return <Playlist
                  key = {song.id}
                  url = {song.album.images[1].url}
                  name = {song.album.name}
                  artist= {song.artists[0].name} 
                  album = {song.name} />
              })
          }
        </div>
    </div>
  );
}

export default App;
