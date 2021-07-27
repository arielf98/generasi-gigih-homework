import axios from 'axios';
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Search({ setTracks, selected, setShowModal }) {

    const [query, setQuery] = useState('')
    const token = useSelector(state => state.userData?.token)

    async function handleSearch ()  {

            if(query !== ''){
                try {
                    let url = `https://api.spotify.com/v1/search?q=${query}&type=track,artist`;
                    const result  = await axios.get(url, {
                      headers: {
                        'Authorization': `Bearer ${token}`
                      },
                    })
                      setTracks(result.data.tracks.items);
                      setQuery('')
                  } catch (err) {
                    console.error(err);
                  }
            }
    }

    function handleCreate(){
      setShowModal(true)
    }

    return (
      
        <div className = "search">
              <input
              onChange={(e) => setQuery(e.target.value)} 
              type="text" 
              value={query}
              placeholder='Search....'/>
              <button onClick={handleSearch}> Search </button>
              {
                selected.length > 0 && (<button onClick={handleCreate}> Create Playlist </button>)
              }
              
          </div>

        
    
       
    )
}
