
import axios from 'axios'
import './Styles.css'

export default function TrackList({url, name, artist, album, uri, setSelected, selected, playlistId, token}) {

    function selectTracks(){
            setSelected([...selected, uri])
            addToPlaylist()
            console.log(uri)
    }

    async function addToPlaylist(){

        try{
            const config = {
                method: 'post',
                url : `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                headers : {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type'  :  'application/json' 
                  },
                  data : {
                    'uris' : [uri]
                  }
            } 
            await axios(config)
        }catch(e){
            console.log(e)
        }
    }

    async function deleteFromPlaylist(){
        try{
            const config = {
                method: 'delete',
                url : `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                headers : {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type'  :  'application/json' 
                  },
                  data : {
                    'tracks' : [{uri}]
                  }
            } 
             await axios(config)

        }catch(e){
            console.log(e)
        }
    }

    function deselectTracks(){
        const selectedArray = [...selected]
        const index = selectedArray.indexOf(uri)
        if(index > -1){
            selectedArray.splice(index, 1)
            setSelected(selectedArray)
            deleteFromPlaylist()
        }
    }

    const isTrackSelected = selected.includes(uri)

    return (
        <div className="playlist-container">
            <img src={url} alt="" />
            <div className="playlist-text">
                <p>{name}</p>
                <p>{artist}</p>
                <p>{album}</p>
                <button
                className={isTrackSelected ? 'selected-button' : null}
                onClick={() => isTrackSelected ?  
                                deselectTracks() : 
                                selectTracks()}>

                    {isTrackSelected ? 'Selected' : 'Select'}

                </button>
            </div>
        </div>
    )
}
