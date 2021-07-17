import './App.css';
import Playlist from './screens/Playlist/Playlist';
import {data} from './data'

function App() {

  console.log(data)

  return (
    <div className="container" >

        <h1>Create Playlist</h1>

        <h2>Recently Listen...</h2>


        <div className="App">
          {
          data.map(song => {
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
